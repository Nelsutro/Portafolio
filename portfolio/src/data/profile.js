const profile = {
  hero: {
    badge: 'Portafolio Profesional',
    name: 'Nelson Erices Briones',
    title: 'Desarrollador de Software · Fullstack Jr.',
    subtitle: 'Ingeniero en Computación e Informática en formación',
    summary:
      'Estudiante de último año de Ingeniería en Computación e Informática en la Universidad Andrés Bello. Tengo experiencia construyendo soluciones web y backend con JavaScript, React, Node.js y MongoDB, aplicando patrones como MVC y metodologías ágiles como Scrum. Busco integrarme a un equipo donde aportar valor, seguir aprendiendo y consolidar mi carrera profesional.',
    location: 'Santiago, Chile',
    contacts: [
      { type: 'Correo', value: 'nelsonerices28@gmail.com', url: 'mailto:nelsonerices28@gmail.com' },
      { type: 'LinkedIn', value: 'linkedin.com/in/nelsonerices', url: 'https://www.linkedin.com/in/nelson-erices-briones-ab1a5a312/' },
      { type: 'GitHub', value: 'github.com/Nelsutro', url: 'https://github.com/Nelsutro' },
      { type: 'Teléfono', value: '+56 9 6372 7980', url: 'tel:+56963727980' }
    ],
    actions: [
      { label: 'Descargar CV', url: '/CV-nelson-erices.pdf', variant: 'primary' },
      { label: 'Conectar en LinkedIn', url: 'https://www.linkedin.com/in/nelson-erices-briones-ab1a5a312/', variant: 'ghost' }
    ],
    photo:
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80'
  },
  profileSummary: {
    professionalProfile:
      'Me especializo en desarrollo web full-stack, priorizando código limpio y experiencias consistentes. Tengo práctica en la construcción de APIs con Node.js/Express, interfaces con React y bases de datos relacionales y NoSQL. Complemento lo técnico con habilidades de comunicación y adaptación para colaborar en equipos multidisciplinarios.',
    technicalSkills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'MySQL',
      'Python',
      'C / C++',
      'Java',
      'PHP',
      'HTML5 & CSS3',
      'Laravel',
      'Angular',
      'APIs RESTful',
      'MVC',
      'Git y GitHub',
      'Postman',
      'Trello',
      'Visual Studio Code',
      'XAMPP'
    ],
    softSkills: [
      'Trabajo en equipo',
      'Adaptabilidad',
      'Comunicación efectiva',
      'Resolución de problemas',
      'Responsabilidad'
    ],
    interests: [
      'Desarrollo web full-stack',
      'Diseño de APIs',
      'Aplicaciones con bases de datos',
      'Metodologías ágiles',
      'Experiencia de usuario',
      'Desarrollo de software'
    ]
  },
  resume: {
    education: [
      {
        institution: 'Universidad Andrés Bello',
        degree: 'Ingeniería en Computación e Informática',
        period: 'Mar 2022 – Dic 2025 (En curso)',
        details: ['Formación orientada a desarrollo de software, bases de datos y arquitectura de sistemas']
      }
    ],
    experience: [
      {
        role: 'Encargado de Gestión Web',
        company: 'Empresa comercial de repuestos automovilísticos',
        period: 'Ene 2024 – Mar 2024',
        details: [
          'Administré y configuré una tienda online con Jumpseller, asegurando catálogos actualizados y experiencia fluida.',
          'Optimicé la organización visual y la estructura de navegación del sitio para mejorar la interacción de los usuarios.',
          'Facilité la gestión de inventario mediante procesos estandarizados y documentación clara.'
        ]
      },
      {
        role: 'Proyecto de Título – Desarrollador Full Stack',
        company: 'PreciFy',
        period: 'Ago 2025 – Dic 2025',
        details: [
          'Diseñé e implementé una plataforma web para profesionales del área TI utilizando React, Node.js y Express.',
          'Integré MongoDB como base de datos NoSQL, aplicando el patrón MVC y control de versiones con Git/GitHub.',
          'Coordine el desarrollo bajo Kanban, elaborando tableros en Trello y revisiones de avance regulares.'
        ]
      }
    ],
    highlights: [
      'Experiencia práctica en desarrollo full-stack con React, Node.js y MongoDB',
      'Aplicación de Scrum y Kanban para gestionar proyectos académicos y laborales',
      'Foco en mejorar experiencias de usuario y procesos digitales en entornos reales'
    ]
  },
  projects: {
    intro:
      'Proyectos que demuestran mi capacidad para diseñar, desarrollar e iterar soluciones web completas, integrando frontend, backend y bases de datos.',
    items: [
      {
        name: 'PreciFy · Plataforma para profesionales TI',
        description:
          'Aplicación full-stack que conecta profesionales TI con oportunidades laborales, incorporando perfiles, filtrado y gestión de postulaciones.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Scrum'],
        role: 'Desarrollador full-stack',
        impact:
          'Construí un MVP funcional que centraliza la visibilidad de perfiles TI y acelera la búsqueda de talento especializado.',
        links: {
          repo: 'https://github.com/Nelsutro/PreciFy-Final',
          demo: ''
        }
      },
      {
        name: 'Gestión E-commerce Jumpseller',
        description:
          'Configuración y optimización de una tienda online de repuestos automotrices, enfocada en catálogos organizados y flujo de compra claro.',
        technologies: ['Jumpseller', 'HTML5', 'CSS3', 'JavaScript'],
        role: 'Encargado de gestión web',
        impact:
          'Mejoró la interacción de usuarios y facilitó la administración del inventario mediante catálogos categorizados y procesos documentados.',
        links: {
          repo: '',
          demo: ''
        }
      },
      {
        name: 'Panel de Gestión de Incidencias TI',
        description:
          'Proyecto académico que permite registrar, priorizar y dar seguimiento a incidencias técnicas dentro de un equipo de soporte.',
        technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
        role: 'Desarrollador full-stack',
        impact:
          'Automatizó el seguimiento de tickets y la generación de reportes, reduciendo tiempos de respuesta del equipo de soporte.',
        links: {
          repo: 'https://github.com/Nelsutro/ticketing-system',
          demo: ''
        }
      }
    ]
  },
  internship: {
    company: 'Empresa comercial de repuestos automovilísticos',
    description:
      'Negocio orientado a la venta de repuestos, con foco en la transformación digital de su canal e-commerce.',
    activities: [
      'Administración diaria del catálogo y stock en la plataforma Jumpseller.',
      'Configuración de páginas y estructura visual para optimizar la experiencia del cliente.',
      'Coordinación con el equipo comercial para sincronizar precios y promociones.'
    ],
    learnings: [
      'Importancia de la comunicación continua con áreas comerciales.',
      'Creación de flujos de trabajo reproducibles para mantener tiendas online actualizadas.',
      'Ajuste de interfaces pensando en usabilidad y objetivos de negocio.'
    ]
  },
  services: {
    description:
      'Puedo aportar desde la construcción de interfaces hasta la implementación de APIs, siempre con foco en entregar soluciones mantenibles y orientadas al usuario.',
    items: [
      {
        name: 'Desarrollo Web Full-Stack',
        details: 'Sitios y aplicaciones con React, Node.js y Express, integrando bases de datos y siguiendo buenas prácticas MVC.'
      },
      {
        name: 'Gestión de Plataformas E-commerce',
        details: 'Configuración y mantenimiento de catálogos digitales, optimización de flujos de compra y automatización de inventario.'
      },
      {
        name: 'Automatización y APIs',
        details: 'Diseño de endpoints RESTful, pruebas con Postman y despliegues que faciliten la integración con otros servicios.'
      }
    ]
  },
  certifications: {
    remark: 'Actualmente en proceso de complementar mi formación con certificaciones técnicas relacionadas a desarrollo y cloud.',
    items: []
  },
  coverLetter: {
    greeting: 'Estimado/a reclutador/a,',
    paragraphs: [
      'Como estudiante de último año de Ingeniería en Computación e Informática me interesa sumarme a un equipo donde pueda contribuir con soluciones full-stack y seguir desarrollando mis habilidades. Me destaco por abordar problemas de manera estructurada, priorizando la experiencia de usuario y la mantenibilidad del código.',
      'Durante mi experiencia como encargado de gestión web administré una tienda e-commerce completa, asegurando catálogos vigentes y mejoras en la navegación. Además, en mi proyecto de título PreciFy lideré el desarrollo de un MVP utilizando React y Node.js, organizando el trabajo con Scrum y controlando versiones con Git.',
      'Estoy convencido de que mi motivación, responsabilidad y capacidad de aprendizaje pueden aportar valor a su organización. Agradezco el tiempo dedicado a revisar mi portafolio y quedo atento a la posibilidad de conversar sobre cómo puedo contribuir a sus desafíos tecnológicos.'
    ],
    closing: 'Saludos cordiales,',
    signature: 'Nelson Erices Briones'
  },
  footer: {
    availability: 'Disponible para oportunidades junior en desarrollo de software y gestión de plataformas digitales.',
    note: 'Portafolio actualizado en noviembre 2025.'
  }
};

export default profile;
