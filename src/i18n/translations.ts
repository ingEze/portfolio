export const translations = {
  es: {
    header: {
      name: 'EZEQUIEL_SAUCEDO',
      subtitle: '// Desarrollador de Software',
      status: 'estado: online | ubicación: /home/backend',
      nav: {
        about: 'Sobre mí',
        projects: 'Proyectos',
        stack: 'Stack',
        contact: 'Contáctame'
      }
    },
    about: {
      title: 'Sobre_Mí',
      description: '¡Hola! Soy desarrollador backend con experiencia en crear sistemas escalables, eficientes y confiables. A lo largo de mi camino en la programación, he diseñado proyectos para resolver problemas reales que surgían mientras aprendía y experimentaba. Además, cuento con conocimientos de frontend y disfruto aprender nuevas tecnologías siempre que ayuden a enfrentar desafíos de manera efectiva.',
      quote: '"El backend es como la magia: si se nota, algo salió mal"'
    },
    projects: {
      title: 'Proyectos',
      list: [
        {
          title: 'E-commerce API',
          tech: 'Node.js | Express | TypeScript | MongoDB | JWT | Zod | Vitest | Docker | Winston & Morgan | Swagger',
          description: 'API completa para e-commerce con autenticación, gestión de productos y órdenes, y simulación de pagos. Construida para ser robusta y escalable.'
        },
        {
          title: '@ingeze/api-error',
          tech: 'Node.js | TypeScript | Jest',
          description: 'Biblioteca de manejo de errores compatible con frameworks como Express.js, Fastify y NestJS. Publicada en NPM.'
        },
        {
          title: '@ingeze/txtspy (CLI)',
          tech: 'Node.js | TypeScript | Jest | TypeDoc | Yargs',
          description: 'Herramienta de línea de comandos (CLI) para analizar archivos de texto y gestionar directorios. Publicada en NPM.'
        },
        {
          title: 'Landing page sobre Ecommerce API',
          tech: 'Astro | CSS | HTML | TypeScript',
          description: 'Sitio web informativo sobre la Ecommerce API, con descripción, ejemplos de uso y enlaces útiles para desarrolladores.'
        }
      ]
    },
    skills: {
      title: 'Stack_Tecnológico',
      categories: {
        language: 'Lenguajes',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Bases de Datos',
        devops: 'DevOps',
        testing: 'Testing'
      }
    },
    contact: {
      title: 'Contacto',
      description: '¿Necesitas construir algo sólido? Hablemos.'
    }
  },

  en: {
    header: {
      name: 'EZEQUIEL_SAUCEDO',
      subtitle: '// Software Developer',
      status: 'status: online | location: /home/backend',
      nav: {
        about: 'About',
        projects: 'Projects',
        stack: 'Stack',
        contact: 'Contact'
      }
    },
    about: {
      title: 'About_Me',
      description: 'Hi! I\'m a backend developer with experience in creating scalable, efficient, and reliable systems. Throughout my programming journey, I\'ve designed projects to solve real problems that arose while learning and experimenting. Additionally, I have frontend knowledge and enjoy learning new technologies whenever they help tackle challenges effectively.',
      quote: '"Backend is like magic: if you notice it, something went wrong"'
    },
    projects: {
      title: 'Projects',
      list: [
        {
          title: 'E-commerce API',
          tech: 'Node.js | Express | TypeScript | MongoDB | JWT | Zod | Vitest | Docker | Winston & Morgan | Swagger',
          description: 'Complete e-commerce API with authentication, product and order management, and payment simulation. Built to be robust and scalable.'
        },
        {
          title: '@ingeze/api-error',
          tech: 'Node.js | TypeScript | Jest',
          description: 'Error handling library compatible with frameworks like Express.js, Fastify, and NestJS. Published on NPM.'
        },
        {
          title: '@ingeze/txtspy (CLI)',
          tech: 'Node.js | TypeScript | Jest | TypeDoc | Yargs',
          description: 'Command-line interface (CLI) tool for analyzing text files and managing directories. Published on NPM.'
        },
        {
          title: 'Landing page about Ecommerce API',
          tech: 'Astro | CSS | HTML | TypeScript',
          description: 'Informative website about the Ecommerce API, with description, usage examples, and useful links for developers.'
        }
      ]
    },
    skills: {
      title: 'Tech_Stack',
      categories: {
        language: 'Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Databases',
        devops: 'DevOps',
        testing: 'Testing'
      }
    },
    contact: {
      title: 'Contact',
      description: 'Need to build something solid? Let\'s talk.'
    }
  }
} as const

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.es