export type Lang = 'fr' | 'en'

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  /** Optional bullet list rendered below the description */
  bullets?: string[]
  tags: string[]
  /** Optional external link (e.g. press article) */
  linkUrl?: string
  linkLabel?: string
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

/**
 * Miniatures via mShots (WordPress) : cache très agressif. Si le site a renvoyé une 404, la capture
 * peut rester « figée ». Incrémente cette valeur puis redéploie pour forcer une nouvelle capture.
 * Côté navigateur : Ctrl+Shift+R (vidage cache de la page) après déploiement.
 */
export const PROJECT_PREVIEW_SNAPSHOT_VERSION = '2026-04-12'

/** URL mShots ; `siteUrl` = URL complète du site (ex. https://rythmit.dimitrigourrin.dev). */
export function projectPreviewMshot(siteUrl: string, w = 600, h = 340): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(siteUrl)}?w=${w}&h=${h}&cv=${PROJECT_PREVIEW_SNAPSHOT_VERSION}`
}

export interface TrSchema {
  nav: {
    about: string
    experience: string
    projects: string
    tech: string
    blog: string
    contact: string
  }
  hero: {
    tag: string
    name: string
    tagline: string
    alternance: string
    cta_projects: string
    cta_cv: string
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
    achievements_label: string
    pro_label: string
    formation: ExperienceItem[]
    achievements: ExperienceItem[]
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
  blog: {
    title: string
    intro: string
    /** affiché uniquement en EN : les articles sont rédigés en français */
    fr_note: string
    company_eyebrow: string
    read_more: string
    entries_singular: string
    entries_plural: string
    entries_none: string
    back_to_list: string
    reading_time_suffix: string
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
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      tag: 'Étudiant · Développeur Fullstack & DevOps',
      name: 'Dimitri Gourrin',
      tagline: 'Architectures performantes (Go, Java, C#) et pratiques DevOps : je conçois des applications complètes - du backend à l\'interface - avec rigueur et autonomie.',
      alternance: 'En recherche d\'alternance · dès septembre 2026 · Rythme : 2 sem. entreprise / 1 sem. cours',
      cta_projects: 'Voir mes projets',
      cta_cv: 'Télécharger mon CV',
      cta_contact: 'Me contacter',
    },
    about: {
      title: 'À propos',
      body: 'Développeur Fullstack en Bachelor 3 Informatique à Ynov Aix, orienté architectures performantes (Go, Java, C#) et pratiques DevOps. Je construis des applications complètes - de la base de données à l\'interface - avec une attention particulière aux fondations solides et au code maintenable. L\'infrastructure et les réseaux font pleinement partie de ma pratique : conteneurisation, CI/CD, administration système - une dimension que je considère nécessaire pour concevoir des systèmes qui fonctionnent vraiment en production. Trilingue, je combine rigueur technique et autonomie pour concevoir des solutions scalables. Je recherche activement une alternance dès septembre 2026 pour continuer à progresser dans un environnement professionnel.',
      facts: ['Ynov Campus · Aix-en-Provence', 'Mobilité : Aix-en-Provence / Marseille', 'Anglais C1 · Russe natif · Italien (notions)'],
    },
    experience: {
      title: 'Parcours',
      formation_label: 'Formation',
      achievements_label: 'Compétition',
      pro_label: 'Expérience professionnelle',
      formation: [
        {
          role: 'Bachelor Informatique - 3e année',
          company: 'Ynov Campus · Aix-en-Provence',
          period: '2024 - Présent',
          description: 'Spécialisation Développement Logiciel & Web.',
          tags: [],
        },
        {
          role: 'Baccalauréat Général',
          company: 'Lycée Rouvière · Toulon',
          period: '2023',
          description: 'Spécialités Mathématiques & NSI (Numérique et Sciences Informatiques). Section Européenne Anglais.',
          tags: [],
        },
      ],
      achievements: [
        {
          role: 'Game Code Challenge 2026',
          company: 'Ynov Campus - concours national (13 campus)',
          period: 'Mars 2026',
          description:
            'Première édition nationale : défis algorithmiques sur une plateforme web gamifiée. Environ 335 participants Bachelor 2 (Informatique, Cybersécurité, IA & Data). Classement : **7e au national**, **2e du campus d\'Aix-en-Provence**.',
          tags: ['Algorithmes', 'Concours'],
          linkUrl:
            'https://www.ynov.com/articles/actualites/retour-game-code-challenge?utm_source=linkedin&utm_medium=social&utm_campaign=social-game-code-challenge',
          linkLabel: 'Article Ynov',
        },
      ],
      items: [
        {
          role: 'Stage - Développement & Infrastructure',
          company: 'Indépendant · Infrastructure & Réseau',
          period: 'Mai - Juil. 2026',
          description: '',
          bullets: [
            'Administration réseau & infra : cartographie, gestion DNS/DHCP/VPN, supervision et monitoring.',
            'Développement web : nouvelles fonctionnalités, audit qualité du code, refactoring et optimisation UI.',
            'DevOps : conteneurisation Docker/Compose, scripts Bash/Python, initiation Ansible, pipeline CI/CD (GitHub Actions).',
          ],
          tags: ['Docker', 'Ansible', 'GitHub Actions', 'Python', 'Linux'],
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
          name: 'Ymmo - Plateforme Immobilière & IA',
          description: 'Plateforme immobilière fullstack en microservices : backend C# ASP.NET Core, microservice IA Python FastAPI (Pandas, Scikit-learn) et frontend React/TypeScript. Prédiction de prix et analyse de tendances marché, auth JWT à 4 niveaux de rôles, PostgreSQL et déploiement Docker Compose.',
          tags: ['C# / ASP.NET Core', 'React', 'Python / FastAPI', 'PostgreSQL', 'Docker'],
          github: 'https://github.com/Dimi3grn/Ymmo',
          live: 'https://ymmo.dimitrigourrin.dev',
          status: 'Projet académique · 2026',
          preview: projectPreviewMshot('https://ymmo.dimitrigourrin.dev'),
        },
        {
          name: 'Recipe Manager - Gestion de Commandes',
          description: 'Application React/TypeScript (Vite) + Tailwind CSS : catalogue de recettes avec recherche et filtres. Authentification par rôles (Client / Admin), CRUD complet côté admin, déployée sur Vercel.',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          github: 'https://github.com/Dimi3grn/Restaurant-orders-website',
          live: 'https://menu.dimitrigourrin.dev',
          status: 'Projet académique · 2025',
          preview: projectPreviewMshot('https://menu.dimitrigourrin.dev'),
        },
        {
          name: 'Rythm-it - Forum Communautaire Musical',
          description: 'Forum de partage musical en Go : architecture MVC (Gorilla Mux) en couches Repository / Service / Controller / Handler, auth JWT par middleware, MySQL avec migrations versionnées, tests unitaires et intégration continue. Frontend en templates Go (HTML/CSS/JS).',
          tags: ['Go', 'Gorilla Mux', 'MySQL', 'JWT', 'CI/CD'],
          github: 'https://github.com/Dimi3grn/Rythm-it',
          live: 'https://rythmit.dimitrigourrin.dev',
          status: 'Projet académique · 2025–2026',
          preview: projectPreviewMshot('https://rythmit.dimitrigourrin.dev'),
        },
        {
          name: 'Infrastructure Sécurisée Haute Disponibilité',
          description: 'Projet d\'administration système & réseau : cluster web et cluster Galera (MariaDB) en haute disponibilité, serveur DNS PowerDNS, VPN et firewall. Accès sécurisés via un bastion Teleport et stratégie de backup automatisée.',
          tags: ['Linux', 'MariaDB Galera', 'PowerDNS', 'VPN', 'Teleport'],
          github: null,
          live: null,
          status: 'Projet académique · 2026',
          preview: null,
        },
        {
          name: 'Bot de Signaux de Trading',
          description: 'Bot Python qui écoute un canal Telegram de signaux de trading, extrait automatiquement les données clés (TP, SL, point d\'entrée) via reformatage IA, puis transmet les ordres directement à MetaTrader.',
          tags: ['Python', 'Telegram API', 'MetaTrader', 'AI'],
          github: 'https://github.com/Dimi3grn/webcatcher',
          live: null,
          status: null,
          preview: null,
        },
        {
          name: 'La Tour de Cristal - Livre-jeu',
          description: 'Jeu de type livre dont vous êtes le héros (inspiré de Loup Solitaire), en Java. Architecture MVC, double interface console (ANSI) et graphique JavaFX, combats, inventaire, sauvegardes par sérialisation. Application desktop - non hébergeable en ligne. Projet collectif Ynov B1 (rôle : modèle, logique métier, combat, persistance).',
          tags: ['Java', 'JavaFX', 'MVC', 'Sérialisation'],
          github: 'https://github.com/Dimi3grn/java-project',
          live: null,
          status: null,
          preview: null,
        },
      ],
    },
    tech: {
      title: 'Stack technique',
      main_label: 'Stack principale',
      secondary_label: 'Également pratiqué',
    },
    blog: {
      title: 'Blog',
      intro: 'Notes techniques et retours d\'expérience, regroupés par dossier. Ouvrez un dossier pour en voir le contenu.',
      fr_note: '',
      company_eyebrow: 'Contexte du stage',
      read_more: 'Lire l\'article',
      entries_singular: 'entrée',
      entries_plural: 'entrées',
      entries_none: 'en préparation',
      back_to_list: 'Tous les articles',
      reading_time_suffix: 'de lecture',
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
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      tag: 'Student · Fullstack & DevOps Developer',
      name: 'Dimitri Gourrin',
      tagline: 'Performant architectures (Go, Java, C#) and DevOps practices: I build complete applications - from backend to interface - with rigor and autonomy.',
      alternance: 'Looking for a work-study position · from September 2026 · Rhythm: 2 weeks company / 1 week school',
      cta_projects: 'See my work',
      cta_cv: 'Download CV',
      cta_contact: 'Get in touch',
    },
    about: {
      title: 'About',
      body: 'Fullstack developer in the 3rd year of the Computer Science Bachelor at Ynov Aix, focused on performant architectures (Go, Java, C#) and DevOps practices. I build complete applications - from database to user interface - with close attention to solid foundations and maintainable code. Infrastructure and networking are a full part of my practice: containerization, CI/CD, system administration - a dimension I consider necessary to build systems that actually work in production. Trilingual, I combine technical rigor and autonomy to design scalable solutions. I\'m actively looking for a work-study position starting September 2026 to keep growing in a professional environment.',
      facts: ['Ynov Campus · Aix-en-Provence', 'Mobility: Aix-en-Provence / Marseille', 'English C1 · Russian native · Italian (basics)'],
    },
    experience: {
      title: 'Background',
      formation_label: 'Education',
      achievements_label: 'Competition',
      pro_label: 'Work experience',
      formation: [
        {
          role: 'Bachelor of Computer Science - 3rd year',
          company: 'Ynov Campus · Aix-en-Provence',
          period: '2024 - Present',
          description: 'Specialization in Software & Web Development.',
          tags: [],
        },
        {
          role: 'French Baccalauréat (General)',
          company: 'Lycée Rouvière · Toulon',
          period: '2023',
          description: 'Majors: Mathematics & Computer Science (NSI). European section in English.',
          tags: [],
        },
      ],
      achievements: [
        {
          role: 'Game Code Challenge 2026',
          company: 'Ynov Campus - national contest (13 campuses)',
          period: 'March 2026',
          description:
            'First national edition: algorithmic challenges on a gamified web platform. Around 335 Bachelor 2 participants (Computer Science, Cybersecurity, AI & Data). Ranking: **7th nationally**, **2nd at the Aix-en-Provence campus**.',
          tags: ['Algorithms', 'Contest'],
          linkUrl:
            'https://www.ynov.com/articles/actualites/retour-game-code-challenge?utm_source=linkedin&utm_medium=social&utm_campaign=social-game-code-challenge',
          linkLabel: 'Ynov article',
        },
      ],
      items: [
        {
          role: 'Internship - Development & Infrastructure',
          company: 'Freelance · Infrastructure & Network',
          period: 'May - Jul. 2026',
          description: '',
          bullets: [
            'Network & infrastructure administration: mapping, DNS/DHCP/VPN management, supervision and monitoring.',
            'Web development: new features, code quality audits, refactoring and UI optimization.',
            'DevOps: Docker/Compose containerization, Bash/Python scripting, introduction to Ansible, CI/CD pipeline (GitHub Actions).',
          ],
          tags: ['Docker', 'Ansible', 'GitHub Actions', 'Python', 'Linux'],
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
          name: 'Ymmo - Real Estate Platform & AI',
          description: 'Fullstack real estate platform built as microservices: C# ASP.NET Core backend, Python FastAPI AI microservice (Pandas, Scikit-learn) and React/TypeScript frontend. Price prediction and market trend analysis, JWT auth with 4 role levels, PostgreSQL and Docker Compose deployment.',
          tags: ['C# / ASP.NET Core', 'React', 'Python / FastAPI', 'PostgreSQL', 'Docker'],
          github: 'https://github.com/Dimi3grn/Ymmo',
          live: 'https://ymmo.dimitrigourrin.dev',
          status: 'Academic project · 2026',
          preview: projectPreviewMshot('https://ymmo.dimitrigourrin.dev'),
        },
        {
          name: 'Recipe Manager - Order Management',
          description: 'React/TypeScript (Vite) + Tailwind CSS app: recipe catalog with search and filters. Role-based authentication (Client / Admin), full CRUD on the admin side, deployed on Vercel.',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
          github: 'https://github.com/Dimi3grn/Restaurant-orders-website',
          live: 'https://menu.dimitrigourrin.dev',
          status: 'Academic project · 2025',
          preview: projectPreviewMshot('https://menu.dimitrigourrin.dev'),
        },
        {
          name: 'Rythm-it - Musical Community Forum',
          description: 'Music sharing forum in Go: MVC architecture (Gorilla Mux) with Repository / Service / Controller / Handler layers, JWT auth middleware, MySQL with versioned migrations, unit tests and continuous integration. Frontend in Go templates (HTML/CSS/JS).',
          tags: ['Go', 'Gorilla Mux', 'MySQL', 'JWT', 'CI/CD'],
          github: 'https://github.com/Dimi3grn/Rythm-it',
          live: 'https://rythmit.dimitrigourrin.dev',
          status: 'Academic project · 2025–2026',
          preview: projectPreviewMshot('https://rythmit.dimitrigourrin.dev'),
        },
        {
          name: 'Secure High-Availability Infrastructure',
          description: 'System & network administration project: high-availability web cluster and Galera cluster (MariaDB), PowerDNS server, VPN and firewall. Access secured through a Teleport bastion with an automated backup strategy.',
          tags: ['Linux', 'MariaDB Galera', 'PowerDNS', 'VPN', 'Teleport'],
          github: null,
          live: null,
          status: 'Academic project · 2026',
          preview: null,
        },
        {
          name: 'Trading Signal Bot',
          description: 'Python bot that monitors a Telegram trading signals channel, automatically extracts key data (TP, SL, entry point) via AI reformatting, then forwards the orders directly to MetaTrader.',
          tags: ['Python', 'Telegram API', 'MetaTrader', 'AI'],
          github: 'https://github.com/Dimi3grn/webcatcher',
          live: null,
          status: null,
          preview: null,
        },
        {
          name: 'The Crystal Tower - Gamebook',
          description: 'Choose-your-own-adventure game (inspired by Lone Wolf), built in Java. MVC architecture, dual console (ANSI) and JavaFX UI, combat system, inventory, saves via Java serialization. Desktop app - not deployable as a website. Collaborative Ynov B1 project (my focus: model, game logic, combat, persistence).',
          tags: ['Java', 'JavaFX', 'MVC', 'Serialization'],
          github: 'https://github.com/Dimi3grn/java-project',
          live: null,
          status: null,
          preview: null,
        },
      ],
    },
    tech: {
      title: 'Tech Stack',
      main_label: 'Main stack',
      secondary_label: 'Also worked with',
    },
    blog: {
      title: 'Blog',
      intro: 'Technical notes and write-ups, grouped into collections. Open one to see what it contains.',
      fr_note: 'Articles are written in French (school requirement).',
      company_eyebrow: 'Internship context',
      read_more: 'Read the article',
      entries_singular: 'entry',
      entries_plural: 'entries',
      entries_none: 'in progress',
      back_to_list: 'All articles',
      reading_time_suffix: 'read',
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
