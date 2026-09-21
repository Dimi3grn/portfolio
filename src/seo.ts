/**
 * Métadonnées par page, source unique pour le prérendu.
 *
 * Sans ça, chaque route sert les balises de index.html : même titre, même
 * description, même og:url. Les générateurs d'aperçu (LinkedIn, Slack, Discord,
 * clients mail) n'exécutent pas de JavaScript, donc ils ne voient jamais les
 * titres posés par PageMeta au runtime - tout lien partagé affiche la vignette
 * de la page d'accueil.
 */

import { articles, companyPage } from './blog/articles'

export const SITE_URL = 'https://dimitrigourrin.dev'
export const SITE_NAME = 'Dimitri Gourrin'
export const OG_IMAGE = `${SITE_URL}/og.png`

export interface PageMetaEntry {
  path: string
  title: string
  description: string
  /** 'article' pour les billets de blog, 'website' pour le reste */
  type: 'website' | 'article'
}

const HOME_TITLE = 'Dimitri Gourrin — Développeur Full Stack orienté DevOps'

const staticPages: PageMetaEntry[] = [
  {
    path: '/',
    title: HOME_TITLE,
    description:
      'Développeur full stack orienté DevOps, basé à Paris, en Bachelor 3 à Ynov Nanterre. Go, C#, TypeScript, Docker et CI/CD. Disponible immédiatement pour une alternance de 12 mois.',
    type: 'website',
  },
  {
    path: '/about',
    title: `À propos — ${SITE_NAME}`,
    description:
      'Mon parcours, mon profil et mon CV. Étudiant en Bachelor 3 à Ynov Nanterre, basé à Paris, orienté développement full stack et DevOps.',
    type: 'website',
  },
  {
    path: '/experience',
    title: `Expérience — ${SITE_NAME}`,
    description:
      'Mon parcours professionnel et académique : stage en infrastructure et DevOps, projets encadrés et compétences acquises.',
    type: 'website',
  },
  {
    path: '/projects',
    title: `Projets — ${SITE_NAME}`,
    description:
      'Mes projets : plateforme immobilière en microservices (C#, Python, React), gestion de commandes, forum communautaire en Go, et infrastructure haute disponibilité.',
    type: 'website',
  },
  {
    path: '/stack',
    title: `Stack technique — ${SITE_NAME}`,
    description:
      'Les technologies que j\'utilise : Go, C#, Python, React et TypeScript côté développement ; Docker, CI/CD, Linux et réseau côté infrastructure.',
    type: 'website',
  },
  {
    path: '/blog',
    title: `Blog — ${SITE_NAME}`,
    description:
      'Notes techniques et retours d\'expérience, regroupés par dossier : stage en infrastructure et réseau, conteneurisation, CI/CD et veille technique.',
    type: 'website',
  },
  {
    path: '/contact',
    title: `Contact — ${SITE_NAME}`,
    description:
      'Me contacter pour une alternance de 12 mois, disponible immédiatement, en développement full stack ou en DevOps.',
    type: 'website',
  },
]

/** Une entrée par page réellement servie, y compris chaque article de blog. */
export function allPages(): PageMetaEntry[] {
  const blogPages: PageMetaEntry[] = [
    {
      path: `/blog/${companyPage.slug}`,
      title: `${companyPage.title} — ${SITE_NAME}`,
      description: companyPage.excerpt,
      type: 'article',
    },
    ...articles.map<PageMetaEntry>(a => ({
      path: `/blog/${a.slug}`,
      title: `${a.title} — ${SITE_NAME}`,
      description: a.excerpt,
      type: 'article',
    })),
  ]
  return [...staticPages, ...blogPages]
}
