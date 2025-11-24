const profile = {
  hero: {
    badge: 'Portafolio Profesional',
    name: 'Nelson Erices Briones',
    title: 'Desarrollador de Software · Fullstack Jr.',
    subtitle: 'Ingeniero en Computación e Informática',
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
      { label: 'Descargar CV', url: '/CV_Nelson_Erices.pdf', variant: 'primary' },
      { label: 'Conectar en LinkedIn', url: 'https://www.linkedin.com/in/nelson-erices-briones-ab1a5a312/', variant: 'ghost' }
    ]
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
        details: [
          'Mención en desarrollo de software, transformación digital y tecnologías disruptivas.',
          'Asignaturas destacadas: Desarrollo Web y Móvil, Minería de Datos, Ciberseguridad, Ingeniería de Software I y II, Infraestructura TI, Paradigmas de Programación, Bases de Datos.',
          'Proyecto de Título: Plataforma “PreciFy” para análisis de tarifas del mercado tecnológico chileno.'
        ]
      }
    ],
    experience: [
      {
        role: 'Desarrollador Full-Stack (Práctica Profesional)',
        company: 'Informática Arcos',
        period: 'Ago 2025 – Nov 2025',
        details: [
          'Desarrollé una plataforma web completa para gestión y emisión de facturas empresariales dirigida a clientes.',
          'Implementé el frontend con Angular y el backend con Laravel PHP, integrando MySQL como base de datos principal.',
          'Integré Flow.cl para procesamiento de pagos y desplegué la aplicación en cPanel para producción.'
        ]
      },
      {
        role: 'Proyecto de Título – Desarrollador Full Stack',
        company: 'PreciFy',
        period: 'Ago 2025 – Dic 2025',
        details: [
          'Diseñé e implementé una plataforma web para profesionales del área TI utilizando React, Node.js y Express.',
          'Integré MongoDB como base de datos NoSQL, aplicando el patrón MVC y control de versiones con Git/GitHub.',
          'Coordine el desarrollo bajo Kanban, elaborando tableros en Trello y revisiones de avance regulares.',
          'implementé un modelo de IA de Gemini para realizar el cálculo de las tarifas.'
        ]
      }
    ],
    highlights: [
      'Experiencia práctica en desarrollo full-stack con Angular, Laravel y MySQL',
      'Integración exitosa de sistemas de pago y despliegue en producción',
      'Aplicación de metodologías ágiles para gestionar proyectos académicos y laborales'
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
        name: 'Plataforma de Gestión de Facturas · Informática Arcos',
        description:
          'Sistema web completo para que empresas gestionen y emitan facturas a sus clientes, con procesamiento de pagos integrado.',
        technologies: ['Angular', 'Laravel PHP', 'MySQL', 'phpMyAdmin', 'Flow.cl', 'cPanel'],
        role: 'Desarrollador full-stack',
        impact:
          'Automatizó el proceso de facturación empresarial y habilitó pagos en línea, reduciendo tiempos administrativos y mejorando la experiencia del cliente.',
        links: {
          repo: 'https://github.com/Nelsutro/FactuFast',
          demo: 'https://factufast.cl'
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
      }
    ]
  },
  internship: {
    company: 'Informática Arcos',
    description:
      'Empresa  especializada en ofrecer soluciones tecnológicas personalizadas a empresas en todo el mundo.',
    activities: [
      'Desarrollo completo de plataforma web para gestión de facturas usando Angular y Laravel PHP.',
      'Diseño e implementación de base de datos MySQL con phpMyAdmin para administración.',
      'Integración de pasarela de pagos Flow.cl y despliegue en servidor cPanel.'
    ],
    learnings: [
      'Experiencia práctica integrando sistemas de pago en aplicaciones web.',
      'Desarrollo full-stack completo desde diseño de base de datos hasta despliegue.',
      'Colaboración con equipos para definir requerimientos funcionales y técnicos.'
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
      'Durante mi práctica profesional en Informática Arcos desarrollé una plataforma completa de facturación empresarial usando Angular y Laravel PHP, integrando Flow.cl para pagos y desplegando en cPanel. Además, en mi proyecto de título PreciFy lideré el desarrollo de un MVP utilizando React y Node.js, organizando el trabajo con metodologías ágiles y control de versiones con Git.',
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
