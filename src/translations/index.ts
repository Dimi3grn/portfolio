export type Lang = 'fr' | 'en'

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export interface ProjectItem {
  name: string
  description: string
  tags: string[]
  github: string | null
  live: string | null
  status: string | null
  preview: string | null
}

export interface TrSchema {
  nav: {
    about: string
    experience: string
    projects: string
    tech: string
    contact: string
  }
  hero: {
    tag: string
    name: string
    tagline: string
    alternance: string
    cta_projects: string
    cta_contact: string
  }
  about: {
    title: string
    body: string
    facts: string[]
  }
  experience: {
    title: string
    formation_label: string
    pro_label: string
    formation: ExperienceItem[]
    items: ExperienceItem[]
  }
  projects: {
    title: string
    items: ProjectItem[]
  }
  tech: {
    title: string
    main_label: string
    secondary_label: string
  }
  contact: {
    title: string
    tagline: string
    email_label: string
    linkedin_label: string
    github_label: string
  }
}

export const t: Record<Lang, TrSchema> = {
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      tech: 'Stack',
      contact: 'Contact',
    },
    hero: {
      tag: 'Étudiant · Développeur Fullstack',
      name: 'Dimitri Gourrin',
      tagline: 'Je conçois des applications complètes — du backend à l\'interface. J\'accorde une attention particulière aux architectures robustes et au code maintenable : des fondations solides qui tiennent dans le temps.',
      alternance: 'En recherche d\'alternance · 12–24 mois · Rythme : 2 sem. entreprise / 1 sem. cours',
      cta_projects: 'Voir mes projets',
      cta_contact: 'Me contacter',
    },
    about: {
      title: 'À propos',
      body: 'Développeur Fullstack en Bachelor Informatique à Ynov Aix, je construis des applications complètes — de la base de données à l\'interface. J\'accorde une attention particulière aux architectures backend solides et au code maintenable : des fondations qui tiennent dans le temps. Curieux de nature, je m\'intéresse autant à la manière dont un système est conçu qu\'au problème qu\'il résout. Bien qu\'orienté développement, le milieu de l\'infrastructure et des réseaux m\'intéresse réellement — une dimension que je considère nécessaire dans le métier pour comprendre et concevoir des systèmes qui fonctionnent vraiment en production. Je cherche une alternance de 12 à 24 mois pour continuer à progresser dans un environnement professionnel.',
      facts: ['Ynov Campus · Aix-en-Provence', 'Anglais C1 · Russe Natif'],
    },
    experience: {
      title: 'Parcours',
      formation_label: 'Formation',
      pro_label: 'Expérience professionnelle',
      formation: [
        {
          role: 'Bachelor Informatique',
          company: 'Ynov Campus · Aix-en-Provence',
          period: '2024 — 2029',
          description: 'Spécialisation Développement Logiciel & Web.',
          tags: [],
        },
        {
          role: 'Baccalauréat Général',
          company: 'Lycée Rouvière · Toulon',
          period: '2024',
          description: 'Spécialités Mathématiques & NSI (Numérique et Sciences Informatiques). Section Européenne Anglais.',
          tags: [],
        },
      ],
      items: [
        {
          role: 'Stage — Développement Web',
          company: 'Indépendant · Infrastructure & Réseau',
          period: 'Mai — Juil. 2026',
          description: 'Conception et développement d\'un site web pour l\'activité du client. Travail en lien direct avec le porteur de projet sur les priorités et le contenu. Exposition aux enjeux réseau, infrastructure et Docker en contexte professionnel.',
          tags: ['React', 'HTML/CSS', 'JavaScript', 'Docker', 'Linux'],
        },
        {
          role: 'Équipier Polyvalent',
          company: 'McDonald\'s · Aix-en-Provence',
          period: 'Mai–Sept. 2025 · Mars–Juil. 2026',
          description: 'Gestion du stress, travail en équipe et respect des procédures en environnement à forte cadence.',
          tags: [],
        },
      ],
    },
    projects: {
      title: 'Projets',
      items: [
        {
          name: 'Forum Communautaire Musical',
          description: 'Application fullstack — forum de partage musical avec système de batailles d\'artistes, profils utilisateurs et interactions sociales. Architecture MVC en Go, authentification JWT, base de données MySQL.',
          tags: ['Go', 'Gorilla Mux', 'MySQL', 'JWT', 'HTML/CSS/JS'],
          github: 'https://github.com/Dimi3grn/Rythm-it',
          live: null,
          status: null,
          preview: null,
        },
        {
          name: 'Application de Gestion de Commandes',
          description: 'Interface fullstack pour un restaurant — frontend React/TypeScript avec dashboard administrateur. Authentification avec rôles (Client / Admin), CRUD complet sur les recettes.',
          tags: ['React', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/Dimi3grn/Restaurant-orders-website',
          live: 'https://menu.dimitrigourrin.dev',
          status: null,
          preview: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fmenu.dimitrigourrin.dev?w=600&h=340',
        },
        {
          name: 'Site Agence Immobilière',
          description: 'Site vitrine pour une agence immobilière — en cours de développement. Déployé en continu sur Vercel depuis la branche principale, itérations régulières.',
          tags: ['React', 'TypeScript', 'C#', 'Python'],
          github: 'https://github.com/Dimi3grn/Ymmo',
          live: null,
          status: 'En développement',
          preview: null,
        },
      ],
    },
    tech: {
      title: 'Stack technique',
      main_label: 'Stack principale',
      secondary_label: 'Également pratiqué',
    },
    contact: {
      title: 'Contact',
      tagline: 'Un projet, une alternance, une question ?',
      email_label: 'Écrire un email',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      tech: 'Stack',
      contact: 'Contact',
    },
    hero: {
      tag: 'Student · Fullstack Developer',
      name: 'Dimitri Gourrin',
      tagline: 'I build complete applications — from backend to interface. I pay close attention to robust architectures and maintainable code: solid foundations that hold up over time.',
      alternance: 'Looking for work-study · 12–24 months · Rhythm: 2 weeks company / 1 week school',
      cta_projects: 'See my work',
      cta_contact: 'Get in touch',
    },
    about: {
      title: 'About',
      body: 'Fullstack developer studying Computer Science at Ynov Aix, I build complete applications — from database to user interface. I pay close attention to solid backend architectures and maintainable code: foundations that hold up over time. Curious by nature, I\'m as interested in how a system is designed as in the problem it solves. While I\'m primarily development-oriented, infrastructure and networking genuinely interest me — a dimension I consider necessary in the field to understand and build systems that actually work in production. I\'m looking for a 12 to 24-month work-study position to keep growing in a professional environment.',
      facts: ['Ynov Campus · Aix-en-Provence', 'English C1 · Russian Native'],
    },
    experience: {
      title: 'Background',
      formation_label: 'Education',
      pro_label: 'Work experience',
      formation: [
        {
          role: 'Bachelor of Computer Science',
          company: 'Ynov Campus · Aix-en-Provence',
          period: '2024 — 2029',
          description: 'Specialization in Software & Web Development.',
          tags: [],
        },
        {
          role: 'French Baccalauréat (General)',
          company: 'Lycée Rouvière · Toulon',
          period: '2024',
          description: 'Majors: Mathematics & Computer Science (NSI). European section in English.',
          tags: [],
        },
      ],
      items: [
        {
          role: 'Internship — Web Development',
          company: 'Freelance · Infrastructure & Network',
          period: 'May — Jul. 2026',
          description: 'Design and development of a website for the client\'s business. Direct collaboration with the project owner on priorities and content. Exposure to networking, infrastructure and Docker in a professional context.',
          tags: ['React', 'HTML/CSS', 'JavaScript', 'Docker', 'Linux'],
        },
        {
          role: 'Team Member',
          company: 'McDonald\'s · Aix-en-Provence',
          period: 'May–Sept. 2025 · Mar.–Jul. 2026',
          description: 'Stress management, teamwork and procedure compliance in a high-pace environment.',
          tags: [],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Musical Community Forum',
          description: 'Fullstack app — music sharing forum with artist battle system, user profiles and social interactions. MVC architecture in Go, JWT authentication, MySQL database.',
          tags: ['Go', 'Gorilla Mux', 'MySQL', 'JWT', 'HTML/CSS/JS'],
          github: 'https://github.com/Dimi3grn/Rythm-it',
          live: null,
          status: null,
          preview: null,
        },
        {
          name: 'Order Management App',
          description: 'Fullstack restaurant interface — React/TypeScript frontend with admin dashboard. Role-based authentication (Client / Admin), full CRUD on recipes.',
          tags: ['React', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/Dimi3grn/Restaurant-orders-website',
          live: 'https://menu.dimitrigourrin.dev',
          status: null,
          preview: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fmenu.dimitrigourrin.dev?w=600&h=340',
        },
        {
          name: 'Real Estate Agency Website',
          description: 'Showcase website for a real estate agency — currently in development. Continuously deployed on Vercel from the main branch, regular iterations.',
          tags: ['React', 'TypeScript', 'C#', 'Python'],
          github: 'https://github.com/Dimi3grn/Ymmo',
          live: null,
          status: 'In development',
          preview: null,
        },
      ],
    },
    tech: {
      title: 'Tech Stack',
      main_label: 'Main stack',
      secondary_label: 'Also worked with',
    },
    contact: {
      title: 'Contact',
      tagline: 'A project, a work-study opportunity, a question?',
      email_label: 'Send an email',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
  },
}
