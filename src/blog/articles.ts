/**
 * Contenu du blog de stage (rendu Ynov B2 — noté selon la grille du
 * « Guide du Blog - Portfolio »). Les articles sont rédigés en français
 * (exigence du barème) ; le toggle EN affiche la même version.
 *
 * Les sections `todo` sont des blocs « à compléter » : des faits personnels
 * (entreprise réelle, anecdotes, ressenti) que seul l'auteur peut écrire.
 * Elles sont visibles en jaune tant qu'elles existent — le blog ne doit pas
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

/** Page « Contexte & entreprise » — élément imposé par le guide, hors articles. */
export const companyPage: Omit<BlogArticle, 'date' | 'dateLabel' | 'readingTime'> = {
  slug: 'entreprise',
  title: 'Contexte du stage - l\'entreprise',
  tags: ['Stage 2026', 'Infrastructure & Réseau'],
  excerpt:
    'Où j\'ai effectué mon stage de fin de Bachelor 2 : présentation de la structure, de son activité et de l\'environnement de travail dans lequel j\'ai évolué de mai à juillet 2026.',
  sections: [
    { type: 'h2', text: 'La structure' },
    {
      type: 'todo',
      text: 'Décrire l\'entreprise avec tes mots (le guide interdit le copier-coller de brochure) : nom ou activité de l\'indépendant, localisation, depuis quand il exerce, pour quels types de clients, pourquoi tu as choisi ce stage.',
    },
    {
      type: 'p',
      text: 'J\'ai effectué mon stage de fin d\'année (mai - juillet 2026) auprès d\'un professionnel indépendant spécialisé en infrastructure et réseau. Travailler dans une petite structure a un avantage énorme pour un stagiaire : on voit tout. Il n\'y a pas de service cloisonné - la même semaine peut passer de l\'administration d\'un serveur DNS à une session de refactoring sur une application web cliente.',
    },
    { type: 'h2', text: 'L\'environnement de travail' },
    {
      type: 'todo',
      text: 'Décrire concrètement le quotidien : sur site ou à distance ? Quels outils de communication ? Comment se passaient les échanges avec ton tuteur (points quotidiens, revue de code, tickets…) ?',
    },
    {
      type: 'p',
      text: 'L\'environnement technique, lui, était riche : parc de machines sous Linux, services réseau auto-hébergés (DNS, DHCP, VPN), supervision, et des projets web en production pour des clients. C\'est un contexte où chaque manipulation a des conséquences réelles - un enseignement en soi, que je détaille dans les articles de ce blog.',
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
      text: 'Les articles qui suivent racontent ces missions dans l\'ordre où je les ai vécues : l\'intégration, le réseau, la conteneurisation et l\'automatisation, les difficultés rencontrées en chemin, et le bilan que j\'en tire.',
    },
  ],
}

export const articles: BlogArticle[] = [
  {
    slug: 'integration-stage-infrastructure',
    title: 'Premiers jours en infrastructure : mon intégration',
    date: '2026-06-05',
    dateLabel: '5 juin 2026',
    tags: ['Stage 2026', 'Intégration'],
    excerpt:
      'Arriver en stage dans une structure d\'infrastructure quand on vient du développement : ce que j\'ai découvert la première semaine, et comment je me suis organisé pour être utile rapidement.',
    readingTime: '4 min',
    sections: [
      {
        type: 'p',
        text: 'Je suis arrivé en stage avec un profil orienté développement - Go, Java, React - et une curiosité réelle mais encore théorique pour l\'infrastructure. La première semaine a immédiatement remis les choses dans l\'ordre : avant de toucher à quoi que ce soit, il faut comprendre ce qui existe.',
      },
      {
        type: 'todo',
        text: 'Raconter ton vrai premier jour : accueil, présentation du parc, première tâche confiée. Une anecdote concrète (même petite) rend l\'article vivant.',
      },
      { type: 'h2', text: 'Comprendre avant d\'agir : la cartographie' },
      {
        type: 'p',
        text: 'Ma première vraie mission a été de cartographier le réseau : lister les machines, les services qui tournent dessus, les adresses, les dépendances entre eux. C\'est un exercice moins passif qu\'il n\'y paraît - pour documenter un service, il faut comprendre son rôle, et poser des questions oblige à s\'intégrer.',
      },
      {
        type: 'img',
        src: '/blog/network-map.svg',
        alt: 'Cartographie simplifiée du réseau : routeur, serveurs de services (DNS, DHCP, VPN), supervision et postes clients',
        caption: 'FIG. 01 - Cartographie simplifiée du réseau (schéma de principe, anonymisé)',
      },
      {
        type: 'p',
        text: 'Cette cartographie est devenue mon document de référence pour tout le stage. Elle a aussi été ma meilleure carte de visite : présenter au tuteur un schéma clair de son propre réseau, c\'est prouver qu\'on a compris l\'environnement dans lequel on met les pieds.',
      },
      { type: 'h2', text: 'Le lien avec la formation' },
      {
        type: 'p',
        text: 'Les cours de réseau et d\'administration système de Bachelor à Ynov m\'ont donné le vocabulaire - sous-réseaux, VLAN, baux DHCP, zones DNS. Ce que le stage a ajouté, c\'est la dimension production : un service mal documenté est un service qu\'on n\'ose pas toucher, et une modification se prépare (sauvegarde, fenêtre d\'intervention, retour arrière possible).',
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
        text: 'Les prochains articles entrent dans le concret des missions : d\'abord l\'administration des services réseau, puis la partie conteneurisation et automatisation.',
      },
    ],
  },

  {
    slug: 'dns-dhcp-vpn-administration',
    title: 'DNS, DHCP, VPN : administrer les services qui font tenir un réseau',
    date: '2026-06-19',
    dateLabel: '19 juin 2026',
    tags: ['Réseau', 'DNS', 'Supervision'],
    excerpt:
      'Trois services invisibles quand tout va bien, critiques quand ça casse. Ce que l\'administration quotidienne de DNS, DHCP et VPN m\'a appris - et pourquoi la supervision change tout.',
    readingTime: '6 min',
    sections: [
      {
        type: 'p',
        text: 'Si le réseau était une ville, le DHCP distribuerait les adresses postales, le DNS serait l\'annuaire, et le VPN le tunnel sécurisé pour y entrer depuis l\'extérieur. Pendant mon stage, j\'ai eu la responsabilité (encadrée) de faire vivre ces trois services : créer des enregistrements, gérer des réservations, ouvrir des accès.',
      },
      { type: 'h2', text: 'Le DNS, ou l\'art de ne rien casser' },
      {
        type: 'p',
        text: 'La leçon la plus marquante : la moindre modification DNS se propage, se met en cache, et une erreur peut rendre un service injoignable pendant des heures. J\'ai appris à raisonner en TTL, à préparer mes modifications à l\'avance, et à vérifier systématiquement la résolution après chaque changement.',
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
      { type: 'h2', text: 'Supervision : voir les problèmes avant les utilisateurs' },
      {
        type: 'p',
        text: 'La deuxième partie de la mission consistait à surveiller ces services : disponibilité, espace disque, certificats. Mettre en place une supervision, c\'est transformer le métier - on passe de « réparer quand quelqu\'un se plaint » à « intervenir avant que ça se voie ». C\'est aussi ce qui m\'a fait comprendre pourquoi les entreprises investissent autant dans l\'observabilité.',
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
        text: 'Cette mission a confirmé une intuition que j\'avais depuis les cours d\'infrastructure : un développeur qui comprend le réseau sur lequel tourne son application prend de meilleures décisions. C\'est exactement la passerelle qu\'explore l\'article suivant, côté DevOps.',
      },
    ],
  },

  {
    slug: 'docker-compose-cicd-github-actions',
    title: 'Du code au conteneur : Docker, Compose et un pipeline CI/CD',
    date: '2026-07-03',
    dateLabel: '3 juillet 2026',
    tags: ['DevOps', 'Docker', 'CI/CD'],
    excerpt:
      'Conteneuriser une application existante puis automatiser ses tests et son déploiement avec GitHub Actions : la mission qui a fait le pont entre ma formation de développeur et l\'infrastructure.',
    readingTime: '6 min',
    sections: [
      {
        type: 'p',
        text: '« Ça marche sur ma machine » - la phrase interdite. Une partie de mon stage a consisté à conteneuriser des applications avec Docker et Docker Compose, puis à mettre en place un pipeline d\'intégration continue avec GitHub Actions. C\'est la mission où formation et stage se sont le plus directement répondu.',
      },
      { type: 'h2', text: 'Conteneuriser : rendre l\'environnement reproductible' },
      {
        type: 'p',
        text: 'Conteneuriser une application existante oblige à expliciter tout ce qui était implicite : versions, variables d\'environnement, dépendances système, volumes de données. L\'exercice ressemble beaucoup à un audit - on découvre ce dont l\'application a réellement besoin pour tourner.',
      },
      {
        type: 'code',
        lang: 'yaml',
        text: '# docker-compose.yml (extrait simplifié)\nservices:\n  app:\n    build: .\n    env_file: .env\n    depends_on: [db]\n    restart: unless-stopped\n  db:\n    image: postgres:16\n    volumes:\n      - db_data:/var/lib/postgresql/data\nvolumes:\n  db_data:',
      },
      { type: 'h2', text: 'Automatiser : le pipeline CI/CD' },
      {
        type: 'p',
        text: 'Une fois l\'application conteneurisée, chaque push déclenche un pipeline GitHub Actions : lint, tests, build de l\'image. L\'intérêt n\'est pas seulement le gain de temps - c\'est la confiance. Un pipeline vert, c\'est la garantie qu\'on n\'a pas cassé l\'existant, et ça change la façon d\'oser refactorer.',
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
        text: 'À Ynov, j\'avais utilisé Docker en projet (Ymmo tourne en Docker Compose avec son backend C# et son microservice FastAPI) et Git au quotidien. Le stage a ajouté la dimension industrialisation : écrire un pipeline que d\'autres utiliseront, penser aux secrets, aux caches de build, aux temps d\'exécution. La boucle formation → mission s\'est même refermée dans l\'autre sens : ce que j\'ai appris en stage a directement amélioré mes projets scolaires.',
      },
      {
        type: 'todo',
        text: 'Ajouter un détail réel sur le projet conteneurisé pendant le stage (type d\'application, stack) et éventuellement une capture du pipeline GitHub Actions (onglet Actions, en anonymisant le repo).',
      },
      {
        type: 'p',
        text: 'Tout ne s\'est évidemment pas passé sans accroc - le prochain article est justement consacré aux difficultés rencontrées et à la façon dont je les ai résolues.',
      },
    ],
  },

  {
    slug: 'difficultes-solutions-stage',
    title: 'Ce qui n\'a pas marché du premier coup : difficultés et solutions',
    date: '2026-07-17',
    dateLabel: '17 juillet 2026',
    tags: ['Retour d\'expérience', 'Debug'],
    excerpt:
      'Un stage sans blocage n\'existe pas. Retour honnête sur trois difficultés rencontrées pendant mes missions, la méthode pour en sortir, et ce que chacune m\'a appris.',
    readingTime: '5 min',
    sections: [
      {
        type: 'p',
        text: 'On apprend peu des jours où tout fonctionne. Cet article revient sur les blocages les plus formateurs de mon stage - pas pour les dramatiser, mais parce que la méthode construite pour en sortir est probablement ce que je réutiliserai le plus longtemps.',
      },
      { type: 'h2', text: 'Difficulté nº1 - Intervenir sur un système en production' },
      {
        type: 'p',
        text: 'Le premier réflexe d\'un étudiant, c\'est de tester pour voir. Sur un réseau en production, ce réflexe est dangereux : derrière chaque service, il y a des utilisateurs réels. La solution a été méthodologique - reproduire d\'abord en local ou sur une machine de test, préparer un plan de retour arrière, puis seulement intervenir. C\'est plus lent, et c\'est le prix de la fiabilité.',
      },
      { type: 'h2', text: 'Difficulté nº2 - Reprendre du code que je n\'ai pas écrit' },
      {
        type: 'p',
        text: 'La mission d\'audit et de refactoring m\'a confronté à du code existant, avec son histoire et ses choix. J\'ai appris à résister à l\'envie de tout réécrire : comprendre d\'abord (lire, tracer, tester), améliorer ensuite par petites étapes vérifiables. Les cours de qualité logicielle prenaient soudain un sens très concret.',
      },
      { type: 'h2', text: 'Difficulté nº3 - Apprendre un outil seul : Ansible' },
      {
        type: 'p',
        text: 'Personne n\'avait le temps de me former sur Ansible ; j\'ai dû construire mon apprentissage moi-même : documentation officielle, un playbook minimal, puis des itérations. Cette autonomie forcée est exactement la compétence que le milieu attend - savoir dire « je ne connais pas encore, mais je sais comment l\'apprendre ».',
      },
      {
        type: 'todo',
        text: 'Remplacer ou compléter ces trois difficultés par tes blocages réels (un incident précis, une erreur commise, un bug retors) - plus c\'est concret et daté, plus l\'analyse réflexive sera crédible.',
      },
      { type: 'h2', text: 'La méthode qui reste' },
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
        text: 'Avec le recul, ces difficultés ont été le vrai programme du stage : elles m\'ont fait passer de « savoir faire un TP » à « savoir travailler ».',
      },
    ],
  },

  {
    slug: 'veille-ansible-infrastructure-as-code',
    title: 'Veille : pourquoi l\'Infrastructure as Code change le métier',
    date: '2026-07-31',
    dateLabel: '31 juillet 2026',
    tags: ['Veille', 'Ansible', 'IaC'],
    excerpt:
      'Découvrir Ansible en stage m\'a ouvert à un sujet plus large : l\'Infrastructure as Code. État des lieux, ce que j\'en ai testé, et mon avis d\'étudiant développeur sur ce que ça implique pour le métier.',
    readingTime: '5 min',
    sections: [
      {
        type: 'p',
        text: 'Pendant mon stage, l\'initiation à Ansible a été une porte d\'entrée vers un sujet de fond : l\'Infrastructure as Code (IaC), c\'est-à-dire décrire ses serveurs et leur configuration dans des fichiers versionnés plutôt que de les configurer à la main. Cet article de veille fait le point sur ce que j\'ai compris, testé, et ce que j\'en pense.',
      },
      { type: 'h2', text: 'Le principe : des serveurs qu\'on décrit, pas qu\'on bricole' },
      {
        type: 'p',
        text: 'Avec Ansible, une configuration devient un playbook YAML : lisible, rejouable, versionné dans Git. La différence avec un script Bash n\'est pas cosmétique - Ansible est idempotent : rejouer le playbook ne casse rien, il converge vers l\'état décrit. Pour un stagiaire, c\'est aussi une documentation exécutable de l\'infrastructure.',
      },
      {
        type: 'code',
        lang: 'yaml',
        text: '# playbook.yml - exemple minimal testé pendant le stage\n- hosts: web\n  become: true\n  tasks:\n    - name: Installer nginx\n      ansible.builtin.apt:\n        name: nginx\n        state: present\n    - name: Démarrer et activer le service\n      ansible.builtin.service:\n        name: nginx\n        state: started\n        enabled: true',
      },
      { type: 'h2', text: 'Ce que dit l\'écosystème' },
      {
        type: 'p',
        text: 'La tendance dépasse largement Ansible : Terraform et OpenTofu pour provisionner le cloud, les conteneurs et Kubernetes pour l\'exécution, GitOps pour piloter le tout depuis des dépôts Git. Le fil conducteur est le même - rapprocher l\'infrastructure des pratiques du développement logiciel : revue de code, CI, historique, rollback.',
      },
      { type: 'h2', text: 'Mon avis, à ma hauteur' },
      {
        type: 'p',
        text: 'Je suis convaincu que c\'est une compétence charnière pour mon profil : les frontières entre « dev » et « ops » sont exactement là où je veux travailler. Mais mon stage m\'a aussi appris la nuance - dans une petite structure, tout automatiser n\'est pas toujours rentable ; l\'IaC vaut le coût quand l\'infrastructure vit et se multiplie. Savoir juger ce seuil fait partie du métier.',
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
    title: 'Bilan de mon stage : ce que ces trois mois ont changé',
    date: '2026-08-14',
    dateLabel: '14 août 2026',
    tags: ['Stage 2026', 'Bilan'],
    excerpt:
      'L\'article bilan : mon ressenti sur ces trois mois entre développement et infrastructure, les compétences réellement acquises, mes points d\'amélioration, et ce que je proposerais si le stage continuait.',
    readingTime: '6 min',
    sections: [
      {
        type: 'p',
        text: 'Trois mois entre développement web, administration réseau et DevOps. Ce dernier article prend le recul demandé par l\'exercice - et que je me dois à moi-même : qu\'est-ce que ce stage a réellement changé dans ma façon de travailler et dans mon projet professionnel ?',
      },
      { type: 'h2', text: 'Mon ressenti' },
      {
        type: 'todo',
        text: 'Écrire ton ressenti réel avec tes mots : ce qui t\'a plu, surpris, frustré ; un moment marquant du stage ; la relation avec ton tuteur. C\'est la partie la plus personnelle du blog - elle ne peut pas être rédigée à ta place.',
      },
      {
        type: 'p',
        text: 'Ce que je peux dire sans hésiter : la double casquette du stage - développement et infrastructure - correspondait exactement à ce que je cherchais. Elle a confirmé mon orientation Fullstack & DevOps, au point d\'avoir réorienté mon CV et ce portfolio dans ce sens.',
      },
      { type: 'h2', text: 'Les compétences acquises' },
      {
        type: 'p',
        text: 'En suivant la méthode « je suis capable de + verbe + objet + contexte » proposée dans le guide de stage, voici les compétences que je peux désormais revendiquer, preuves à l\'appui :',
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
        text: 'Si la mission se poursuivait, je proposerais trois chantiers dans la continuité directe de ce que j\'ai livré : généraliser l\'IaC avec Ansible pour rendre les serveurs reproductibles, étendre la supervision aux applications clientes (et pas seulement aux services réseau), et documenter les procédures d\'intervention dans un wiki unique - la cartographie du premier jour m\'a prouvé la valeur d\'une documentation à jour.',
      },
      { type: 'h2', text: 'Et maintenant' },
      {
        type: 'p',
        text: 'Ce stage clôt mon Bachelor 2 et ouvre la suite : une alternance dès septembre 2026, sur un rythme de 2 semaines en entreprise pour 1 semaine de cours, idéalement sur un poste mêlant développement et pratiques DevOps. Ce blog continuera à documenter ce parcours.',
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
