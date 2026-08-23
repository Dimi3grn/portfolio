/**
 * Contenu du blog de stage (rendu Ynov B2 - noté selon la grille du
 * « Guide du Blog - Portfolio »). Les articles sont rédigés en français
 * (exigence du barème) ; le toggle EN affiche la même version.
 *
 * Ton éditorial : clair, concis, direct, professionnel - pas de narration.
 *
 * Les sections `todo` sont des blocs « à compléter » : des faits personnels
 * (entreprise réelle, anecdotes, ressenti) que seul l'auteur peut écrire.
 * Elles sont visibles en jaune tant qu'elles existent - le blog ne doit pas
 * être mis en production avant de les avoir remplacées.
 */

export type ArticleSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'img'; src: string; alt: string; caption?: string }
  | { type: 'code'; lang: string; text: string }
  | { type: 'quote'; text: string }
  | { type: 'todo'; text: string }

export interface BlogArticle {
  slug: string
  title: string
  /** ISO, utilisé pour le tri */
  date: string
  dateLabel: string
  tags: string[]
  excerpt: string
  /** temps de lecture estimé, ex. "4 min" */
  readingTime: string
  sections: ArticleSection[]
}

/** Page « Contexte & entreprise » - élément imposé par le guide, hors articles. */
export const companyPage: Omit<BlogArticle, 'date' | 'dateLabel' | 'readingTime'> = {
  slug: 'entreprise',
  title: 'Contexte du stage - l\'entreprise',
  tags: ['Stage 2026', 'Infrastructure & Réseau'],
  excerpt:
    'Présentation de la structure d\'accueil du stage (mai - juillet 2026) : activité, environnement de travail et missions confiées.',
  sections: [
    { type: 'h2', text: 'La structure' },
    {
      type: 'todo',
      text: 'Décrire l\'entreprise avec tes mots (le guide interdit le copier-coller de brochure) : nom ou activité de l\'indépendant, localisation, depuis quand il exerce, pour quels types de clients, pourquoi tu as choisi ce stage.',
    },
    {
      type: 'p',
      text: 'Stage de fin de Bachelor 2, effectué de mai à juillet 2026 auprès d\'un professionnel indépendant spécialisé en infrastructure et réseau. Une structure de cette taille implique un périmètre large : sur une même période, les missions couvrent l\'administration de services réseau, le développement web et les pratiques DevOps.',
    },
    { type: 'h2', text: 'L\'environnement de travail' },
    {
      type: 'todo',
      text: 'Décrire concrètement le quotidien : sur site ou à distance ? Quels outils de communication ? Comment se passaient les échanges avec ton tuteur (points quotidiens, revue de code, tickets…) ?',
    },
    {
      type: 'p',
      text: 'Environnement technique : parc de machines Linux, services réseau auto-hébergés (DNS, DHCP, VPN), supervision, et applications web en production pour des clients. Chaque intervention a un impact réel, ce qui impose une méthode : sauvegarde préalable, fenêtre d\'intervention, plan de retour arrière.',
    },
    { type: 'h2', text: 'Mes missions' },
    {
      type: 'ul',
      items: [
        'Administration réseau & infrastructure : cartographie du réseau, gestion DNS/DHCP/VPN, supervision et monitoring.',
        'Développement web : nouvelles fonctionnalités, audit qualité du code, refactoring et optimisation UI.',
        'DevOps : conteneurisation Docker/Compose, scripts Bash/Python, initiation Ansible, pipeline CI/CD (GitHub Actions).',
      ],
    },
    {
      type: 'p',
      text: 'Les articles de ce blog documentent ces missions : intégration, administration réseau, conteneurisation et automatisation, difficultés rencontrées, puis bilan.',
    },
  ],
}

export const articles: BlogArticle[] = [
  {
    slug: 'integration-stage-infrastructure',
    title: 'Intégration : première semaine et cartographie du réseau',
    date: '2026-06-05',
    dateLabel: '5 juin 2026',
    tags: ['Stage 2026', 'Intégration'],
    excerpt:
      'Prise en main de l\'environnement, cartographie du parc et méthode de travail mise en place pour être opérationnel rapidement.',
    readingTime: '4 min',
    sections: [
      {
        type: 'p',
        text: 'Profil au départ du stage : développement (Go, Java, React), connaissances d\'infrastructure encore théoriques. Premier objectif fixé avec le tuteur : comprendre l\'existant avant toute intervention.',
      },
      {
        type: 'todo',
        text: 'Raconter ton vrai premier jour : accueil, présentation du parc, première tâche confiée. Une anecdote concrète (même petite) rend l\'article vivant.',
      },
      { type: 'h2', text: 'Première mission : cartographier le réseau' },
      {
        type: 'p',
        text: 'La première mission a consisté à cartographier le réseau : inventaire des machines, services hébergés, adressage, dépendances entre services. L\'exercice impose de comprendre le rôle de chaque élément et génère des échanges réguliers avec le tuteur - efficace pour s\'intégrer et apprendre l\'environnement.',
      },
      {
        type: 'img',
        src: '/blog/network-map.svg',
        alt: 'Cartographie simplifiée du réseau : routeur, serveurs de services (DNS, DHCP, VPN), supervision et postes clients',
        caption: 'FIG. 01 - Cartographie simplifiée du réseau (schéma de principe, anonymisé)',
      },
      {
        type: 'p',
        text: 'Cette cartographie a servi de document de référence pendant toute la durée du stage : préparation des interventions, localisation rapide d\'un service, support de discussion avec le tuteur.',
      },
      { type: 'h2', text: 'Le lien avec la formation' },
      {
        type: 'p',
        text: 'Les cours de réseau et d\'administration système d\'Ynov ont fourni les bases : sous-réseaux, VLAN, baux DHCP, zones DNS. Le stage a ajouté les contraintes de production : documentation systématique, modifications préparées à l\'avance, retour arrière toujours possible.',
      },
      {
        type: 'ul',
        items: [
          'Savoir : modèles OSI/TCP-IP, rôles DNS/DHCP - acquis en cours, confrontés au réel.',
          'Savoir-faire : documenter un parc existant, utiliser SSH proprement, lire des configurations.',
          'Savoir-être : poser des questions au bon moment, ne pas improviser sur un système en production.',
        ],
      },
      {
        type: 'p',
        text: 'Les articles suivants détaillent les missions : administration des services réseau, puis conteneurisation et automatisation.',
      },
    ],
  },

  {
    slug: 'dns-dhcp-vpn-administration',
    title: 'DNS, DHCP, VPN : administration des services réseau en production',
    date: '2026-06-19',
    dateLabel: '19 juin 2026',
    tags: ['Réseau', 'DNS', 'Supervision'],
    excerpt:
      'Administration de trois services critiques sur un environnement de production : opérations réalisées, précautions adoptées et apport de la supervision.',
    readingTime: '6 min',
    sections: [
      {
        type: 'p',
        text: 'Pendant le stage, j\'ai administré - sous encadrement - trois services centraux du réseau : le DNS (résolution de noms), le DHCP (attribution d\'adresses) et le VPN (accès distants). Opérations réalisées : création et modification d\'enregistrements, gestion de plages et de réservations, ouverture d\'accès.',
      },
      { type: 'h2', text: 'DNS : des modifications qui engagent' },
      {
        type: 'p',
        text: 'Une modification DNS se propage et se met en cache : une erreur publiée peut rendre un service injoignable pendant toute la durée du TTL. Méthode adoptée : préparer chaque modification, abaisser le TTL avant un changement sensible, vérifier la résolution immédiatement après application.',
      },
      {
        type: 'img',
        src: '/blog/dns-flow.svg',
        alt: 'Schéma de résolution DNS : client, résolveur, serveur autoritaire, avec les caches et TTL',
        caption: 'FIG. 02 - Chemin d\'une résolution DNS et rôle des caches (TTL)',
      },
      {
        type: 'code',
        lang: 'bash',
        text: '# vérifier la résolution après une modification de zone\ndig app.exemple.lan @serveur-dns +short\n\n# suivre un bail DHCP attribué à un poste\njournalctl -u isc-dhcp-server | grep "DHCPACK"',
      },
      { type: 'h2', text: 'Supervision : détecter avant les utilisateurs' },
      {
        type: 'p',
        text: 'Second volet de la mission : la surveillance de ces services (disponibilité, espace disque, certificats). Avec une supervision en place, les incidents sont détectés par des alertes plutôt que signalés par les utilisateurs, et les interventions deviennent planifiables. C\'est un changement de fonctionnement mesurable, pas un confort.',
      },
      {
        type: 'todo',
        text: 'Préciser l\'outil de supervision réellement utilisé (Zabbix ? Uptime Kuma ? Grafana ? scripts maison ?) et un exemple réel d\'alerte reçue pendant le stage.',
      },
      { type: 'h2', text: 'Connaissances mobilisées' },
      {
        type: 'ul',
        items: [
          'Cours de réseau Ynov (adressage, protocoles) : indispensables pour comprendre ce que je manipulais.',
          'Linux en ligne de commande : tout se fait en SSH, à distance, sans interface graphique.',
          'Rigueur documentaire : chaque intervention consignée - un réflexe directement réutilisable en entreprise.',
        ],
      },
      {
        type: 'p',
        text: 'Ce volet réseau complète directement mon profil de développeur : connaître l\'environnement d\'exécution permet de concevoir de meilleures applications. La suite - conteneurisation et CI/CD - fait l\'objet de l\'article suivant.',
      },
    ],
  },

  {
    slug: 'docker-compose-cicd-github-actions',
    title: 'Docker, Compose et CI/CD : conteneuriser puis automatiser',
    date: '2026-07-03',
    dateLabel: '3 juillet 2026',
    tags: ['DevOps', 'Docker', 'CI/CD'],
    excerpt:
      'Conteneurisation d\'applications existantes avec Docker/Compose et mise en place d\'un pipeline GitHub Actions : périmètre, choix techniques et lien direct avec la formation.',
    readingTime: '6 min',
    sections: [
      {
        type: 'p',
        text: 'Mission DevOps du stage : conteneuriser des applications existantes avec Docker et Docker Compose, puis automatiser la vérification et le build avec un pipeline GitHub Actions.',
      },
      { type: 'h2', text: 'Conteneuriser : expliciter l\'environnement' },
      {
        type: 'p',
        text: 'Conteneuriser une application existante revient à expliciter tous ses prérequis : versions, variables d\'environnement, dépendances système, volumes de données. Résultat : un environnement reproductible, identique en développement et en production, et une mise en service qui tient en une commande.',
      },
      {
        type: 'code',
        lang: 'yaml',
        text: '# docker-compose.yml (extrait simplifié)\nservices:\n  app:\n    build: .\n    env_file: .env\n    depends_on: [db]\n    restart: unless-stopped\n  db:\n    image: postgres:16\n    volumes:\n      - db_data:/var/lib/postgresql/data\nvolumes:\n  db_data:',
      },
      { type: 'h2', text: 'Le pipeline CI/CD' },
      {
        type: 'p',
        text: 'Chaque push déclenche le pipeline : lint, tests, build de l\'image. Bénéfices constatés : détection immédiate des régressions, déploiements reproductibles, historique des builds consultable. Conséquence directe sur le travail quotidien : le refactoring devient moins risqué, donc plus fréquent.',
      },
      {
        type: 'img',
        src: '/blog/pipeline-cicd.svg',
        alt: 'Pipeline CI/CD : push vers GitHub, exécution des jobs lint/tests/build, production d\'une image Docker, déploiement',
        caption: 'FIG. 03 - Le pipeline mis en place : du push au déploiement',
      },
      { type: 'h2', text: 'Le lien direct avec ma formation' },
      {
        type: 'p',
        text: 'Docker et Git faisaient déjà partie de mes projets Ynov - Ymmo tourne en Docker Compose avec un backend C# et un microservice FastAPI. Le stage a ajouté la dimension industrialisation : un pipeline utilisé par d\'autres, la gestion des secrets, les caches de build, les temps d\'exécution. En retour, ces pratiques ont été réinjectées dans mes projets scolaires.',
      },
      {
        type: 'todo',
        text: 'Ajouter un détail réel sur le projet conteneurisé pendant le stage (type d\'application, stack) et éventuellement une capture du pipeline GitHub Actions (onglet Actions, en anonymisant le repo).',
      },
      {
        type: 'p',
        text: 'Les difficultés rencontrées sur ces missions font l\'objet de l\'article suivant.',
      },
    ],
  },

  {
    slug: 'difficultes-solutions-stage',
    title: 'Difficultés rencontrées et solutions apportées',
    date: '2026-07-17',
    dateLabel: '17 juillet 2026',
    tags: ['Retour d\'expérience', 'Debug'],
    excerpt:
      'Trois difficultés rencontrées pendant les missions - environnement de production, code existant, apprentissage d\'Ansible - et la méthode appliquée pour les résoudre.',
    readingTime: '5 min',
    sections: [
      {
        type: 'p',
        text: 'Cet article documente les trois principales difficultés du stage et les solutions mises en place. L\'objectif : expliciter la méthode, réutilisable au-delà du contexte.',
      },
      { type: 'h2', text: 'Difficulté nº1 - Intervenir sur un environnement de production' },
      {
        type: 'p',
        text: 'Un environnement utilisé par des clients interdit l\'expérimentation directe. Solution adoptée : reproduire d\'abord en local ou sur une machine de test, préparer un plan de retour arrière, puis intervenir sur un créneau défini. Le rythme est plus lent ; la fiabilité prime.',
      },
      { type: 'h2', text: 'Difficulté nº2 - Reprendre du code existant' },
      {
        type: 'p',
        text: 'La mission d\'audit et de refactoring portait sur du code que je n\'avais pas écrit. Méthode appliquée : comprendre avant de modifier (lecture, traçage, tests), puis améliorer par petites étapes vérifiables plutôt que réécrire. Les notions de qualité logicielle vues en cours ont trouvé ici leur application directe.',
      },
      { type: 'h2', text: 'Difficulté nº3 - Apprendre Ansible en autonomie' },
      {
        type: 'p',
        text: 'Ansible ne faisait pas partie de ma formation et aucune montée en compétence encadrée n\'était possible. Démarche : documentation officielle, playbook minimal, itérations sur des cas réels. Résultat : une méthode d\'auto-formation applicable à n\'importe quel outil - identifier le besoin, réduire le périmètre, itérer.',
      },
      {
        type: 'todo',
        text: 'Remplacer ou compléter ces trois difficultés par tes blocages réels (un incident précis, une erreur commise, un bug retors) - plus c\'est concret et daté, plus l\'analyse réflexive sera crédible.',
      },
      { type: 'h2', text: 'La méthode retenue' },
      {
        type: 'ul',
        items: [
          'Reproduire le problème avant de le corriger - jamais de correction à l\'aveugle.',
          'Chercher la cause racine, pas le symptôme (les logs d\'abord, les hypothèses ensuite).',
          'Documenter la solution : le prochain bloqué sera peut-être moi, dans six mois.',
          'Demander de l\'aide après avoir cherché - avec un résumé clair de ce qui a déjà été tenté.',
        ],
      },
      {
        type: 'p',
        text: 'Ces situations ont structuré ma façon de travailler : reproduire, corriger la cause, documenter - avant de passer à la tâche suivante.',
      },
    ],
  },

  {
    slug: 'veille-ansible-infrastructure-as-code',
    title: 'Veille : l\'Infrastructure as Code, d\'Ansible à GitOps',
    date: '2026-07-31',
    dateLabel: '31 juillet 2026',
    tags: ['Veille', 'Ansible', 'IaC'],
    excerpt:
      'État des lieux de l\'Infrastructure as Code à partir de mon initiation Ansible en stage : principe, écosystème, cas d\'usage et limites pour une petite structure.',
    readingTime: '5 min',
    sections: [
      {
        type: 'p',
        text: 'L\'initiation à Ansible pendant le stage m\'a conduit à étudier le sujet plus large de l\'Infrastructure as Code (IaC) : décrire les serveurs et leur configuration dans des fichiers versionnés plutôt que de les configurer manuellement. Synthèse de cette veille.',
      },
      { type: 'h2', text: 'Le principe' },
      {
        type: 'p',
        text: 'Avec Ansible, une configuration devient un playbook YAML versionné dans Git. Différence structurante avec un script shell : l\'idempotence - rejouer le playbook converge vers l\'état décrit, sans effet de bord. Le playbook sert aussi de documentation exécutable de l\'infrastructure.',
      },
      {
        type: 'code',
        lang: 'yaml',
        text: '# playbook.yml - exemple minimal testé pendant le stage\n- hosts: web\n  become: true\n  tasks:\n    - name: Installer nginx\n      ansible.builtin.apt:\n        name: nginx\n        state: present\n    - name: Démarrer et activer le service\n      ansible.builtin.service:\n        name: nginx\n        state: started\n        enabled: true',
      },
      { type: 'h2', text: 'L\'écosystème' },
      {
        type: 'p',
        text: 'La tendance dépasse Ansible : Terraform et OpenTofu pour le provisioning cloud, conteneurs et Kubernetes pour l\'exécution, GitOps pour piloter l\'ensemble depuis des dépôts Git. Le fil conducteur : appliquer à l\'infrastructure les pratiques du développement logiciel - revue de code, CI, historique, rollback.',
      },
      { type: 'h2', text: 'Mon analyse' },
      {
        type: 'p',
        text: 'Pour mon profil, l\'IaC est une compétence charnière entre développement et opérations - exactement la zone où je veux travailler. Limite constatée en stage : dans une petite structure, tout automatiser n\'est pas toujours rentable ; l\'IaC se justifie quand l\'infrastructure évolue ou se multiplie. Savoir évaluer ce seuil fait partie du métier.',
      },
      {
        type: 'ul',
        items: [
          'À court terme : approfondir Ansible (rôles, inventaires, Vault) sur mes propres projets.',
          'À moyen terme : Terraform sur un petit projet cloud personnel.',
          'En continu : suivre les blogs d\'ingénierie et l\'actualité DevOps pour rester en veille active.',
        ],
      },
    ],
  },

  {
    slug: 'bilan-stage-2026',
    title: 'Bilan de stage : compétences acquises et axes de progression',
    date: '2026-08-14',
    dateLabel: '14 août 2026',
    tags: ['Stage 2026', 'Bilan'],
    excerpt:
      'Bilan des trois mois de stage : compétences acquises formulées et vérifiables, points d\'amélioration identifiés, propositions pour la suite de la mission.',
    readingTime: '6 min',
    sections: [
      {
        type: 'p',
        text: 'Trois mois entre développement web, administration réseau et DevOps. Ce bilan récapitule ce que le stage a produit : compétences acquises, axes de progression et propositions concrètes.',
      },
      { type: 'h2', text: 'Mon ressenti' },
      {
        type: 'todo',
        text: 'Écrire ton ressenti réel avec tes mots : ce qui t\'a plu, surpris, frustré ; un moment marquant du stage ; la relation avec ton tuteur. C\'est la partie la plus personnelle du blog - elle ne peut pas être rédigée à ta place.',
      },
      {
        type: 'p',
        text: 'Un constat objectif : la double dimension du stage - développement et infrastructure - correspond à l\'orientation que je vise. Elle a confirmé mon positionnement Fullstack & DevOps, répercuté depuis sur mon CV et sur ce portfolio.',
      },
      { type: 'h2', text: 'Les compétences acquises' },
      {
        type: 'p',
        text: 'En suivant la formulation « je suis capable de + verbe + objet + contexte » proposée dans le guide de stage :',
      },
      {
        type: 'ul',
        items: [
          'Je suis capable de cartographier et documenter un réseau d\'entreprise existant (machines, services, dépendances).',
          'Je suis capable d\'administrer des services DNS, DHCP et VPN sur un environnement de production, en suivant une procédure d\'intervention.',
          'Je suis capable de conteneuriser une application existante avec Docker/Compose et de mettre en place son pipeline CI/CD sous GitHub Actions.',
          'Je suis capable d\'automatiser une configuration serveur simple avec Ansible.',
          'Je suis capable d\'auditer et de refactorer du code existant par étapes vérifiables, sans casser l\'existant.',
        ],
      },
      {
        type: 'img',
        src: '/blog/competences.svg',
        alt: 'Schéma savoirs / savoir-faire / savoir-être appliqué au stage',
        caption: 'FIG. 04 - Ce que le stage a apporté, selon la grille savoirs / savoir-faire / savoir-être',
      },
      { type: 'h2', text: 'Mes points d\'amélioration' },
      {
        type: 'ul',
        items: [
          'Estimer le temps d\'une tâche : j\'ai régulièrement sous-estimé la part de vérification et de documentation.',
          'Communiquer l\'avancement sans attendre qu\'on me le demande - un réflexe de junior à corriger.',
          'Approfondir la sécurité (durcissement, gestion des secrets), survolée pendant le stage et essentielle pour la suite.',
        ],
      },
      { type: 'h2', text: 'Mes suggestions' },
      {
        type: 'p',
        text: 'Si la mission se poursuivait, trois chantiers dans la continuité directe de ce qui a été livré : généraliser l\'IaC avec Ansible pour rendre les serveurs reproductibles, étendre la supervision aux applications clientes (et pas seulement aux services réseau), et centraliser les procédures d\'intervention dans un wiki unique.',
      },
      { type: 'h2', text: 'Et maintenant' },
      {
        type: 'p',
        text: 'Ce stage clôt mon Bachelor 2 et ouvre la suite : une alternance dès septembre 2026, sur un rythme de 2 semaines en entreprise pour 1 semaine de cours, sur un poste mêlant développement et pratiques DevOps. Ce blog continuera à documenter ce parcours.',
      },
    ],
  },
]

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find(a => a.slug === slug)
}

/** true tant qu'il reste des blocs « à compléter » quelque part */
export function hasPendingTodos(): boolean {
  const all = [...articles.flatMap(a => a.sections), ...companyPage.sections]
  return all.some(s => s.type === 'todo')
}
