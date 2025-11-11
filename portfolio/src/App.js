import './App.css';
import profile from './data/profile';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="section">
    <div className="section__header">
      <h2>{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </div>
    <div className="section__content">{children}</div>
  </section>
);

const TagList = ({ title, items }) => (
  <div className="tag-list">
    <span className="tag-list__label">{title}</span>
    <div className="tag-list__items">
      {items.map((item) => (
        <span key={item} className="tag-list__tag">
          {item}
        </span>
      ))}
    </div>
  </div>
);

function App() {
  const { hero, profileSummary, resume, projects, internship, services, certifications, coverLetter, footer } = profile;
  const heroHasPhoto = Boolean(hero.photo);

  return (
    <div className="app">
      <div className="layout">
        <header className={`hero${heroHasPhoto ? '' : ' hero--no-photo'}`}>
          <div className="hero__content">
            <span className="hero__badge">{hero.badge}</span>
            <h1>{hero.name}</h1>
            <p className="hero__title">{hero.title}</p>
            <p className="hero__subtitle">{hero.subtitle}</p>
            <p className="hero__summary">{hero.summary}</p>
            <p className="hero__location">{hero.location}</p>
            <ul className="hero__contact-list">
              {hero.contacts.map((contact) => (
                <li key={contact.type}>
                  <span>{contact.type}</span>
                  <a href={contact.url} target="_blank" rel="noreferrer">
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              {hero.actions.map((action) => (
                <a key={action.label} href={action.url} className={`button button--${action.variant}`}>
                  {action.label}
                </a>
              ))}
            </div>
          </div>
          {heroHasPhoto && (
            <div className="hero__media">
              <div className="hero__photo-frame">
                <img src={hero.photo} alt={`Retrato profesional de ${hero.name}`} />
              </div>
            </div>
          )}
        </header>

        <main>
          <Section id="perfil" title="Perfil Profesional" subtitle="Visión, habilidades y áreas de interés">
            <p className="paragraph">{profileSummary.professionalProfile}</p>
            <div className="grid-2">
              <TagList title="Competencias técnicas" items={profileSummary.technicalSkills} />
              <TagList title="Habilidades blandas" items={profileSummary.softSkills} />
            </div>
            <TagList title="Áreas de interés" items={profileSummary.interests} />
          </Section>

          <Section id="curriculum" title="Currículum Vitae" subtitle="Trayectoria académica y profesional">
            <div className="resume">
              <div className="resume__column">
                <h3>Educación</h3>
                {resume.education.map((edu) => (
                  <article key={`${edu.institution}-${edu.period}`} className="card">
                    <header>
                      <h4>{edu.degree}</h4>
                      <span className="meta">{edu.period}</span>
                    </header>
                    <p className="meta">{edu.institution}</p>
                    <ul>
                      {edu.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="resume__column">
                <h3>Experiencia</h3>
                {resume.experience.map((exp) => (
                  <article key={`${exp.company}-${exp.role}`} className="card">
                    <header>
                      <h4>{exp.role}</h4>
                      <span className="meta">{exp.period}</span>
                    </header>
                    <p className="meta">{exp.company}</p>
                    <ul>
                      {exp.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
            <div className="resume__highlights">
              <h3>Logros destacados</h3>
              <ul>
                {resume.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="proyectos" title="Proyectos Destacados" subtitle="Casos representativos y resultados obtenidos">
            <p className="paragraph paragraph--muted">{projects.intro}</p>
            <div className="card-grid">
              {projects.items.map((project) => (
                <article key={project.name} className="card card--project">
                  <header>
                    <h3>{project.name}</h3>
                    <p className="meta">{project.role}</p>
                  </header>
                  <p>{project.description}</p>
                  <TagList title="Tecnologías" items={project.technologies} />
                  <p className="impact">{project.impact}</p>
                  <div className="links">
                    {project.links.repo && (
                      <a href={project.links.repo} target="_blank" rel="noreferrer">
                        Ver repositorio
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noreferrer">
                        Ver demo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="practica" title="Experiencia en Práctica Profesional" subtitle={internship.company}>
            <div className="grid-2">
              <div className="card">
                <h3>Organización</h3>
                <p>{internship.description}</p>
              </div>
              <div className="card">
                <h3>Actividades realizadas</h3>
                <ul>
                  {internship.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>Aprendizajes clave</h3>
              <ul className="pill-list">
                {internship.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="servicios" title="Servicios que Puedo Ofrecer" subtitle="Cómo puedo aportar en tu organización">
            <p className="paragraph">{services.description}</p>
            <div className="card-grid">
              {services.items.map((service) => (
                <article key={service.name} className="card">
                  <h3>{service.name}</h3>
                  <p>{service.details}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="certificaciones" title="Certificaciones y Reconocimientos" subtitle="Compromiso con el aprendizaje continuo">
            <p className="paragraph paragraph--muted">{certifications.remark}</p>
            <ul className="certifications">
              {certifications.items.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <span className="meta">{cert.issuer} · {cert.year}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="carta" title="Carta de Presentación" subtitle="Motivación y propuesta de valor">
            <div className="cover-letter">
              <p>{coverLetter.greeting}</p>
              {coverLetter.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p>{coverLetter.closing}</p>
              <p className="cover-letter__signature">{coverLetter.signature}</p>
            </div>
          </Section>
        </main>

        <footer className="footer">
          <p>{footer.availability}</p>
          <p className="meta">{footer.note}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
