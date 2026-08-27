/**
 * Contenu du blog de stage - rendu Ynov Bachelor 2, noté sur 20 selon la grille
 * « Évaluation individuelle du rapport d'activité professionnelle ».
 * Les articles sont rédigés en français (exigence du barème) ; le toggle EN
 * affiche la même version.
 *
 * Ton éditorial : clair, concis, direct, professionnel - pas de narration.
 *
 * Chaque critère de la grille est adossé à un passage précis :
 *   cadre général (nom, localisation, secteur, durée) ... companyPage, « La structure »
 *   marché de l'entreprise ......................... companyPage, « La structure »
 *   organisation du travail en équipe .............. companyPage, « Travailler à trois »
 *   rattachement hiérarchique et responsabilités ... companyPage, « Travailler à trois »
 *   outils techniques et méthodes .................. articles 2 à 4
 *   curiosité, créativité, autonomie ............... bilan, section dédiée
 *   difficulté révélant forces ET faiblesses ....... bilan, « Une difficulté, ce qu'elle dit de moi »
 *   ressenti et progression ........................ bilan, « Mon ressenti »
 *   impact sur le projet professionnel ............. bilan, « Ce que le stage a confirmé »
 *
 * Le type de section `todo` reste disponible pour rédiger : il affiche un bloc
 * jaune « à compléter ». Il ne doit plus en rester au moment du rendu.
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
      type: 'p',
      text: 'Le stage s\'est déroulé chez Youkyi, la structure d\'Alexandre Agasseau, professionnel indépendant basé dans le nord de la France. Secteur d\'activité : l\'hébergement et l\'infrastructure. Son activité repose sur une infrastructure auto-hébergée qu\'il administre lui-même, et sur laquelle ses clients font tourner leurs propres services.',
    },
    {
      type: 'p',
      text: 'Sa clientèle est composée de particuliers qui veulent héberger leurs propres solutions chez un prestataire plutôt que de les confier à un grand fournisseur. C\'est un positionnement de niche, entre deux offres qui dominent le marché : l\'hébergement mutualisé grand public, bon marché mais rigide, et les fournisseurs cloud, souples mais facturés à l\'usage et exigeants en compétences. Une structure indépendante occupe l\'espace intermédiaire, et y vend autant l\'accompagnement que la machine.',
    },
    {
      type: 'p',
      text: 'Concrètement, il s\'agit d\'un homelab de taille conséquente : plusieurs machines Linux, des services mutualisés entre les clients, et les contraintes qui vont avec. Ce n\'est pas un environnement de démonstration - ce qui tourne dessus est en production, et une erreur de configuration se voit immédiatement côté client.',
    },
    {
      type: 'p',
      text: 'J\'ai choisi ce stage pour sa dimension infrastructure. Mon parcours était jusque-là orienté développement, et il me manquait la partie réseau et système pour aller vers un profil DevOps. Une structure indépendante offrait exactement ça : un périmètre large, peu de cloisonnement entre les rôles, et un accès direct à l\'ensemble de l\'infrastructure plutôt qu\'à un domaine restreint.',
    },
    {
      type: 'p',
      text: 'Le stage a eu lieu de mai à juillet 2026, en fin de Bachelor 2. Ce format explique l\'étendue des missions : sur une même période, elles couvrent l\'administration de cette infrastructure, le développement web et les pratiques DevOps.',
    },
    { type: 'h2', text: 'L\'environnement de travail' },
    {
      type: 'p',
      text: 'Tout s\'est fait à distance, sans aucune présence sur site. Trois canaux cohabitaient : Discord pour le quotidien, Teams pour les échanges plus cadrés, et la plateforme interne du tuteur, qui regroupait la documentation des services et les tâches à traiter.',
    },
    {
      type: 'p',
      text: 'Cette plateforme a compté plus que je ne l\'imaginais au départ. Chaque service disposait de sa fiche, et une tâche renvoyait vers la documentation correspondante : avant de toucher à quoi que ce soit, on savait à quoi on avait affaire. C\'est aussi ce qui m\'a fait comprendre qu\'une intervention n\'est terminée que lorsqu\'elle est écrite quelque part.',
    },
    {
      type: 'p',
      text: 'Le travail était organisé en deux créneaux par jour, le midi et le soir, chacun ouvert par un point avec le tuteur. En pratique, il consacrait environ deux heures à chaque prise et à chaque fin de poste : cadrage de ce qu\'il y avait à faire en arrivant, revue de ce qui avait été produit en partant. Ce n\'était donc jamais du travail en autonomie sèche - il y avait toujours quelqu\'un pour valider une approche avant de la lancer.',
    },
    {
      type: 'p',
      text: 'Travailler à distance sur une infrastructure en production change la façon d\'intervenir. Sans accès physique aux machines, chaque manipulation doit préserver le lien distant : une erreur qui coupe l\'accès ne se rattrape pas en se levant de sa chaise. Cette contrainte a structuré ma méthode plus que n\'importe quelle consigne.',
    },
    {
      type: 'p',
      text: 'Le périmètre technique couvre les services auto-hébergés (DNS, DHCP, VPN, supervision) et le site web de l\'activité. Comme tout est utilisé en continu, chaque intervention impose une méthode : sauvegarde préalable, fenêtre d\'intervention annoncée, plan de retour arrière prêt avant de toucher quoi que ce soit.',
    },
    { type: 'h2', text: 'Travailler à trois' },
    {
      type: 'p',
      text: 'Nous étions trois stagiaires : Xerly, Romain et moi. Il n\'y a pas eu de répartition des tâches entre nous - nous avancions en parallèle sur les mêmes sujets, chacun sur son périmètre, en restant en appel quasiment en continu. Cette configuration a changé la vitesse d\'apprentissage : quand l\'un bloquait, il y avait souvent quelqu\'un qui avait rencontré le même mur une heure plus tôt.',
    },
    {
      type: 'p',
      text: 'L\'infrastructure de travail était partagée, et c\'est là que la collaboration est devenue une contrainte technique plutôt qu\'une question d\'organisation. Une machine commune, mais un compte par personne plutôt qu\'un compte unique - décision prise pour la traçabilité : savoir qui a fait quoi n\'est pas une formalité quand trois personnes interviennent au même endroit.',
    },
    {
      type: 'p',
      text: 'Concrètement, cela imposait des réflexes que je n\'avais jamais eus en travaillant seul : préfixer ses conteneurs à son nom, vérifier quels ports étaient déjà occupés avant d\'en publier un, et surtout identifier ce qui appartenait aux autres pour ne pas y toucher. Plusieurs fois, la bonne décision a été de contourner plutôt que de corriger quelque chose qui n\'était pas à moi.',
    },
    {
      type: 'p',
      text: 'Côté encadrement, la structure est simple : un seul interlocuteur, le tuteur, qui validait les approches avant qu\'on les lance et relisait ce qui avait été produit en fin de créneau. Aucune hiérarchie entre nous trois. Ma responsabilité portait sur mon propre périmètre - mes machines, mes services, mes interventions - avec l\'obligation de ne pas dégrader celui des autres.',
    },
    {
      type: 'p',
      text: 'C\'était ma première expérience d\'un environnement où mon travail peut interrompre celui de quelqu\'un d\'autre. En projet scolaire, une erreur n\'engage que soi. Ici, publier un port déjà pris ou redémarrer le mauvais conteneur arrêtait le travail de deux personnes.',
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
      'Prise en main de l\'environnement, cartographie des machines et des services, et méthode de travail mise en place pour être opérationnel rapidement.',
    readingTime: '3 min',
    sections: [
      {
        type: 'p',
        text: 'Profil au départ du stage : développement (Go, Java, React), connaissances d\'infrastructure encore théoriques. Premier objectif fixé avec le tuteur : comprendre l\'existant avant toute intervention.',
      },
      {
        type: 'p',
        text: 'Le premier jour a suivi un ordre simple : mise en place des accès, tour d\'horizon des tâches prévues sur la durée du stage, puis un TP d\'introduction pour se mettre en jambes. Rien de spectaculaire, mais l\'enchaînement était réfléchi - on ne m\'a pas lâché sur l\'infrastructure avant que je sache m\'y connecter et à quoi m\'attendre.',
      },
      {
        type: 'p',
        text: 'On m\'a d\'abord demandé de me familiariser avec Proxmox, l\'hyperviseur sur lequel repose l\'ensemble des machines virtuelles. C\'était le bon point d\'entrée : tout ce qui a suivi - les services réseau, les conteneurs, les interventions - tourne sur des machines qui vivent là. Comprendre l\'étage du dessous avant de toucher à celui du dessus a évité pas mal de confusion par la suite.',
      },
      {
        type: 'p',
        text: 'C\'est aussi là que j\'ai mesuré l\'écart entre les cours et la réalité. Je savais ce qu\'était une machine virtuelle ; je n\'en avais jamais vu tout un ensemble tourner en parallèle, avec des services que quelqu\'un utilise pendant que vous les regardez.',
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
          'Savoir-faire : documenter une infrastructure existante, utiliser SSH proprement, lire des configurations.',
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
    readingTime: '4 min',
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
        type: 'p',
        text: 'L\'outil retenu est Grafana. Il faut être précis sur son rôle : Grafana ne collecte rien lui-même, il lit des métriques déjà remontées par les machines et les met en forme. C\'est la couche visible d\'une chaîne qui commence sur chaque hôte - ce point m\'a demandé un moment pour être clair, parce qu\'on parle couramment de « mettre en place Grafana » comme si l\'outil faisait tout le travail.',
      },
      {
        type: 'p',
        text: 'Les indicateurs suivis se sont stabilisés autour de quatre familles :',
      },
      {
        type: 'ul',
        items: [
          'Disponibilité des services critiques : si le DNS tombe, tout ce qui en dépend devient injoignable, et le symptôme observé n\'a rien à voir avec la cause.',
          'Espace disque par machine : la panne la plus banale, la plus évitable, et celle qui casse le plus de choses d\'un coup.',
          'Expiration des certificats : une échéance connue des mois à l\'avance ne devrait jamais provoquer d\'incident.',
          'Charge des machines virtuelles côté hyperviseur : pour distinguer un service lent d\'un hôte saturé.',
        ],
      },
      {
        type: 'p',
        text: 'L\'alerte la plus fréquente pendant le stage a été le franchissement de seuil sur l\'espace disque. Le cas typique : une partition qui se remplit non pas à cause des données du service, mais des journaux qu\'il produit. La réaction immédiate - purger - règle le symptôme pour quelques jours. Le vrai correctif est ailleurs : configurer la rotation des journaux pour que le problème ne revienne pas. C\'est la première fois que j\'ai vu concrètement la différence entre traiter un incident et le résoudre.',
      },
      {
        type: 'p',
        text: 'La leçon qui m\'a le plus servi ensuite porte sur les seuils. Une alerte trop sensible se déclenche en permanence, on prend l\'habitude de l\'ignorer, et le jour où elle signale un vrai problème elle est devenue invisible. Une alerte doit correspondre à une action à mener : si personne ne fait rien quand elle arrive, elle n\'aurait pas dû être écrite.',
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
      'Conteneurisation avec Docker/Compose, puis la même chaîne CI/CD montée trois fois sur trois forges différentes : GitHub Actions, Gitea et GitLab.',
    readingTime: '6 min',
    sections: [
      {
        type: 'p',
        text: 'Mission DevOps du stage : conteneuriser une application, puis automatiser sa vérification et sa publication. L\'exercice avait une contrainte inhabituelle et c\'est ce qui en a fait l\'intérêt : monter la même chaîne trois fois, sur trois forges différentes - GitHub Actions, Gitea auto-hébergé, puis GitLab.',
      },
      { type: 'h2', text: 'Conteneuriser : expliciter l\'environnement' },
      {
        type: 'p',
        text: 'Conteneuriser une application existante revient à expliciter tous ses prérequis : versions, variables d\'environnement, dépendances système, volumes de données. Résultat : un environnement reproductible, identique en développement et en production, et une mise en service qui tient en une commande.',
      },
      {
        type: 'code',
        lang: 'yaml',
        text: '# la stack de déploiement ne construit plus rien :\n# elle consomme l\'image publiée par le pipeline\nservices:\n  app:\n    image: <registre>/mon-app:latest\n    restart: unless-stopped\n    healthcheck:\n      test: ["CMD", "python", "-c",\n        "import urllib.request; urllib.request.urlopen(\'http://localhost:5000/api/health\')"]\n      interval: 10s\n      retries: 5\n    networks: [appnet]\n\n  proxy:\n    image: nginx:1.27-alpine\n    ports: ["8080:80"]\n    depends_on:\n      app: { condition: service_healthy }\n    networks: [appnet]\n\nnetworks:\n  appnet:',
      },
      {
        type: 'p',
        text: 'Un détail de ce fichier m\'a coûté une demi-heure avant que je comprenne : depends_on seul ne garantit que l\'ordre de démarrage, pas que le service soit prêt à répondre. Sans le couple healthcheck / condition: service_healthy, le proxy démarre avant l\'application et sert une erreur 502. La différence entre « démarré » et « prêt » n\'est pas une subtilité de documentation.',
      },
      { type: 'h2', text: 'Le pipeline, trois fois plutôt qu\'une' },
      {
        type: 'p',
        text: 'La chaîne est toujours la même : un push construit l\'image, la teste, puis la publie sur un registre. Ce qui change d\'une forge à l\'autre est la syntaxe et, surtout, la façon dont le travail est exécuté.',
      },
      {
        type: 'ul',
        items: [
          'GitHub Actions : runner auto-hébergé installé sur le serveur. Le job s\'exécute directement sur la machine, donc Docker et les dossiers de déploiement sont accessibles tels quels.',
          'Gitea : forge auto-hébergée, jobs exécutés dans un conteneur. Le localhost du job n\'est plus celui du serveur - le test de fumée a dû être réécrit pour s\'exécuter à l\'intérieur du conteneur testé.',
          'GitLab : runner en mode shell, retour à une exécution directe sur la machine, mais avec une syntaxe de pipeline entièrement différente (stages et jobs au lieu d\'étapes).',
        ],
      },
      {
        type: 'p',
        text: 'Le runner auto-hébergé n\'était pas un choix esthétique : le serveur n\'est pas joignable depuis Internet. Un runner hébergé par la forge ne peut tout simplement pas l\'atteindre. C\'est le runner qui sort vers la forge, récupère le travail, et l\'exécute localement.',
      },
      {
        type: 'p',
        text: 'Refaire trois fois la même chose a un effet que je n\'attendais pas : à la troisième, on ne lit plus la documentation de la même façon. On cherche où l\'outil range les concepts qu\'on connaît déjà - où il déclare les étapes, où il stocke les secrets, comment il désigne un runner - au lieu de réapprendre depuis zéro.',
      },
      { type: 'h2', text: 'Taguer par le hash de commit' },
      {
        type: 'p',
        text: 'Chaque image est publiée avec deux étiquettes : latest et le hash court du commit. La seconde est celle qui compte. latest est mouvante - elle pointe vers le dernier build, et si deux personnes publient à quelques minutes d\'intervalle, plus personne ne sait quelle version tourne réellement. Le hash, lui, est immuable et relie l\'image au commit exact qui l\'a produite.',
      },
      {
        type: 'p',
        text: 'C\'est ce qui rend un retour arrière possible : on redéploie un tag connu comme fonctionnel plutôt que de reconstruire en espérant. En production, on déploie un tag explicite, jamais latest.',
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
      { type: 'h2', text: 'Ce que le test de fumée a réellement bloqué' },
      {
        type: 'p',
        text: 'Le pipeline commence par un test volontairement minimal : construire l\'image, la lancer, appeler son point de contrôle de santé. Rien de sophistiqué. Pour vérifier qu\'il servait à quelque chose, j\'ai poussé une faute de syntaxe délibérée.',
      },
      {
        type: 'p',
        text: 'Le pipeline est passé au rouge à cette première étape. L\'image cassée n\'a jamais atteint le registre - le tag correspondant est simplement absent - et la version en service n\'a pas bougé. Le correctif poussé derrière a fait repasser la chaîne au vert. Une application qui ne démarre pas ne peut pas être publiée : c\'est peu, mais c\'est exactement ce qu\'on lui demande.',
      },
      { type: 'h2', text: 'Séparer la construction du déploiement' },
      {
        type: 'p',
        text: 'Sur deux des trois forges, j\'ai volontairement arrêté le pipeline après la publication de l\'image, sans étape de déploiement. La mise en service reste une action décidée par quelqu\'un. Ce n\'est pas de la prudence excessive : le maillon le plus fragile de toute la chaîne était justement le déploiement, où le runner pilotait sa propre machine via la socket Docker. Pratique en laboratoire, difficilement défendable ailleurs - qui détient cette socket détient la machine.',
      },
      {
        type: 'p',
        text: 'Le déploiement manuel a lui aussi eu sa surprise : après avoir recréé le conteneur applicatif, le site renvoyait des erreurs 502 alors que tout semblait sain. Nginx avait mis en cache l\'adresse de l\'application au démarrage, et le conteneur recréé en avait une nouvelle. Un redémarrage du proxy suffisait. Le genre de détail qu\'aucun cours ne mentionne et qu\'on n\'oublie plus.',
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
      'Trois blocages réels du stage - un certificat impossible à obtenir, une image qui ignore une convention, un message d\'erreur qui désigne le mauvais coupable - et ce que chacun a changé dans ma méthode.',
    readingTime: '4 min',
    sections: [
      {
        type: 'p',
        text: 'Trois blocages du stage, choisis parce qu\'ils m\'ont chacun coûté du temps et appris quelque chose de transposable. Les deux premiers portent sur des outils ; le troisième sur ma façon de chercher.',
      },
      { type: 'h2', text: 'Le certificat qui ne sortait jamais' },
      {
        type: 'p',
        text: 'Objectif : obtenir un vrai certificat TLS pour un service hébergé sur un serveur qui n\'est pas joignable depuis Internet. La validation habituelle est donc exclue - elle suppose qu\'une autorité extérieure vienne lire un fichier sur le serveur. La solution passe par une validation qui repose sur le DNS : on publie un enregistrement, l\'autorité le lit, et le serveur n\'a jamais besoin d\'être atteignable.',
      },
      {
        type: 'p',
        text: 'Sur le papier, c\'est réglé. En pratique, la demande échouait systématiquement avec un dépassement de délai sur le port 53. Le blocage a duré parce que je cherchais l\'erreur du mauvais côté : je vérifiais que l\'enregistrement était bien créé - il l\'était.',
      },
      {
        type: 'p',
        text: 'La cause était ailleurs. Avant de solliciter l\'autorité, l\'outil vérifiait lui-même son propre travail en interrogeant directement les serveurs DNS. Or les requêtes DNS sortantes étaient bloquées sur ce réseau. Le contrôle échouait, et l\'outil abandonnait avant même de demander le certificat. Il a suffi de désactiver cette auto-vérification pour que tout passe.',
      },
      {
        type: 'quote',
        text: 'Ce n\'était pas la tâche qui échouait, c\'était le contrôle de la tâche. Depuis, quand un outil échoue sur une étape que je crois maîtriser, je vérifie d\'abord ce qu\'il vérifie, lui.',
      },
      { type: 'h2', text: 'Quand l\'image ne suit pas la convention' },
      {
        type: 'p',
        text: 'Deuxième blocage, sur la gestion des mots de passe. La bonne pratique consiste à ne plus les passer en variables d\'environnement - où ils restent lisibles par quiconque peut inspecter le conteneur - mais à les faire lire depuis un fichier. La plupart des images officielles supportent cette convention. Celle que j\'utilisais, non.',
      },
      {
        type: 'p',
        text: 'Solution : construire une image dérivée avec un point d\'entrée qui lit le fichier et le met à disposition de l\'application avant de lui rendre la main. Le secret disparaît alors de l\'inspection du conteneur, ce que j\'ai vérifié plutôt que supposé.',
      },
      {
        type: 'p',
        text: 'Sauf que l\'application refusait toujours de démarrer, en annonçant une configuration incomplète, alors que le secret était bien chargé - les journaux le confirmaient. J\'ai fini par ouvrir le script d\'installation à l\'intérieur de l\'image officielle : il exigeait cinq variables, pas quatre. Il en manquait une, sans aucun rapport avec les mots de passe. Lire le code de l\'outil qu\'on utilise reste souvent plus rapide que deviner son comportement.',
      },
      { type: 'h2', text: 'Un faux problème d\'authentification' },
      {
        type: 'p',
        text: 'Le cas qui m\'a le plus appris est celui où le message d\'erreur désignait le mauvais coupable. Un outil d\'analyse intégré au pipeline échouait invariablement sur « clé d\'API invalide ». J\'ai d\'abord suspecté la clé elle-même, puis la région du compte, puis les droits d\'accès.',
      },
      {
        type: 'p',
        text: 'La bonne décision a été de tester la couche la plus basse en premier : appeler l\'API directement, hors du pipeline, avec la clé brute. Réponse au premier essai : invalide. Deuxième essai en copiant la clé au lieu de la retaper : valide. J\'avais confondu un I majuscule et un l minuscule, indiscernables dans la police du terminal.',
      },
      {
        type: 'p',
        text: 'La clé étant confirmée bonne, le problème ne pouvait plus venir que de sa transmission. Il venait d\'une ligne de configuration ajoutée lors d\'une itération précédente, qui redéclarait la variable en la faisant se référencer elle-même. Le pipeline recevait le nom de la variable au lieu de sa valeur. Aucun message n\'y faisait allusion.',
      },
      {
        type: 'p',
        text: 'Deux enseignements que j\'applique maintenant par réflexe : tester la couche la plus basse avant de suspecter la configuration, et se méfier d\'un message d\'erreur qui désigne un coupable évident. « Clé invalide » ne voulait pas dire que la clé était mauvaise, mais qu\'elle n\'arrivait pas.',
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
    readingTime: '3 min',
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
    readingTime: '7 min',
    sections: [
      {
        type: 'p',
        text: 'Trois mois entre développement web, administration réseau et DevOps. Ce bilan récapitule ce que le stage a produit : compétences acquises, axes de progression et propositions concrètes.',
      },
      { type: 'h2', text: 'Mon ressenti' },
      {
        type: 'p',
        text: 'Ce que j\'ai préféré tient en trois choses : la relation avec mon tuteur, l\'autonomie encadrée, et le fait de sentir la progression au fil des semaines plutôt que de la constater à la fin.',
      },
      {
        type: 'p',
        text: 'Mon tuteur ne nous a jamais donné une réponse directement. Pas une seule fois. Il nous renvoyait chercher, indiquait des sources, orientait la recherche quand elle partait dans le décor. En revanche, il savait expliquer : une fois qu\'on avait trouvé, il remettait la pièce à sa place dans l\'ensemble. Il nous a épargné l\'errance, jamais le travail.',
      },
      {
        type: 'p',
        text: 'Sur le moment, c\'est parfois frustrant. Avec le recul, c\'est ce qui distingue ce stage d\'un stage où l\'on exécute : les méthodes décrites dans l\'article sur les difficultés, je ne les ai pas apprises parce qu\'on me les a enseignées, mais parce qu\'il ne m\'a pas laissé le choix de les construire.',
      },
      { type: 'h2', text: 'Ce qui m\'a surpris' },
      {
        type: 'p',
        text: 'Mes lacunes, d\'abord. Je pensais avoir des bases correctes ; j\'ai découvert qu\'une notion comprise en cours et une notion utilisable devant une infrastructure réelle sont deux choses différentes.',
      },
      {
        type: 'p',
        text: 'La portée des actions, ensuite. En cours, une erreur se solde par un exercice raté. Ici, une mauvaise manipulation se voit sur une infrastructure que quelqu\'un utilise. Cette différence-là ne se transmet pas par un cours : il faut avoir eu le doigt au-dessus de la touche Entrée en se demandant si on a bien vérifié.',
      },
      { type: 'h2', text: 'Ce qui a été pénible' },
      {
        type: 'p',
        text: 'Passer des heures sur un blocage en tournant en rond. C\'est la partie la moins glorieuse et la plus fréquente. Les trois difficultés racontées plus haut ont chacune coûté un temps disproportionné par rapport à la taille du correctif final - une option à ajouter, une variable manquante, une ligne à supprimer.',
      },
      {
        type: 'p',
        text: 'C\'est aussi de là que vient le plus utile de ce stage. Chercher au mauvais endroit pendant deux heures apprend, mais seulement si on prend ensuite la peine de comprendre pourquoi on cherchait là. La méthode ne vient pas des problèmes résolus : elle vient des problèmes mal cherchés.',
      },
      { type: 'h2', text: 'Une difficulté, ce qu\'elle dit de moi' },
      {
        type: 'p',
        text: 'Si je devais n\'en retenir qu\'une, ce serait le blocage sur la clé d\'API racontée dans l\'article sur les difficultés. Elle est la plus instructive parce qu\'elle m\'a montré mes deux versants d\'un coup.',
      },
      {
        type: 'p',
        text: 'Mes faiblesses, d\'abord, parce qu\'elles sont les plus visibles. J\'ai fait confiance au message d\'erreur au lieu de le questionner : il disait « clé invalide », j\'ai cherché un problème de clé. J\'ai ensuite testé mes hypothèses dans le mauvais ordre - en commençant par les plus coûteuses à vérifier, la région du compte et les droits d\'accès, alors que la plus simple ne demandait qu\'une commande. Et j\'ai retapé une clé à la main plutôt que de la copier, ce qui a ajouté une fausse piste à un problème qui n\'en manquait pas.',
      },
      {
        type: 'p',
        text: 'Mes forces, ensuite. Je n\'ai pas contourné : la solution facile aurait été de régénérer une clé jusqu\'à ce que ça marche, sans jamais comprendre pourquoi. J\'ai procédé par élimination méthodique, j\'ai isolé chaque couche jusqu\'à prouver que la clé était bonne, et je suis remonté à la vraie cause - une ligne de configuration qui empêchait la valeur d\'arriver. J\'ai aussi documenté la démarche, ce qui l\'a rendue réutilisable.',
      },
      {
        type: 'p',
        text: 'Le déséquilibre est clair et je l\'assume : je suis meilleur à creuser qu\'à choisir par où commencer. Ma marge de progression est là - ordonner mes hypothèses de la moins chère à la plus chère avant de me lancer, au lieu de suivre la piste la plus évidente.',
      },
      { type: 'h2', text: 'Ce que le stage a confirmé' },
      {
        type: 'p',
        text: 'La double dimension du stage - développement et infrastructure - correspond à l\'orientation que je vise. Elle a confirmé mon positionnement Fullstack & DevOps, répercuté depuis sur mon CV et sur ce portfolio.',
      },
      { type: 'h2', text: 'Curiosité, créativité, autonomie' },
      {
        type: 'p',
        text: 'Curiosité : quand l\'application refusait de démarrer sans dire pourquoi, je suis allé ouvrir le script d\'installation à l\'intérieur de l\'image officielle. La documentation ne mentionnait pas la variable manquante ; le code, lui, l\'exigeait noir sur blanc. Lire la source d\'un outil plutôt qu\'attendre qu\'il s\'explique est le réflexe que je garde de plus utile.',
      },
      {
        type: 'p',
        text: 'Créativité : cette même image ne savait pas lire un mot de passe depuis un fichier, alors que c\'est la bonne pratique. Les deux options évidentes étaient mauvaises - laisser le secret en clair, ou renoncer à l\'image. J\'ai construit une image dérivée dotée d\'un point d\'entrée qui comble le manque avant de rendre la main à l\'original. La contrainte était contournée sans rien dégrader.',
      },
      {
        type: 'p',
        text: 'Autonomie : sur les trois forges, seule la première a été accompagnée. Les deux suivantes, je les ai montées seul en transposant ce que j\'avais compris - y compris lorsque l\'outil rangeait les mêmes concepts à des endroits différents, ce qui obligeait à comprendre le principe plutôt qu\'à recopier une recette.',
      },
      { type: 'h2', text: 'Les compétences acquises' },
      {
        type: 'p',
        text: 'En suivant la formulation « je suis capable de + verbe + objet + contexte » proposée dans le guide de stage :',
      },
      {
        type: 'ul',
        items: [
          'Je suis capable de cartographier et documenter une infrastructure existante (machines, services, dépendances).',
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
        text: 'Si la mission se poursuivait, trois chantiers dans la continuité directe de ce qui a été livré : généraliser l\'IaC avec Ansible pour rendre les serveurs reproductibles, étendre la supervision au site web (et pas seulement aux services réseau), et centraliser les procédures d\'intervention dans un wiki unique.',
      },
      { type: 'h2', text: 'Et maintenant' },
      {
        type: 'p',
        text: 'Ce stage clôt mon Bachelor 2 et ouvre la suite : une alternance dès septembre 2026, sur un rythme de 2 semaines en entreprise pour 1 semaine de cours, sur un poste mêlant développement et pratiques DevOps. Ce blog continuera à documenter ce parcours.',
      },
    ],
  },
]

/**
 * Un dossier regroupe plusieurs écrits autour d'un même sujet.
 * La page /blog n'affiche que les dossiers repliés ; le contenu se déplie au clic.
 */
export interface BlogCollection {
  slug: string
  /** œillet mono affiché au-dessus du titre */
  eyebrow: string
  title: string
  /** décrit ce que contient le dossier, lu avant de l'ouvrir */
  description: string
  /** période ou cadre, affiché en mono sous la description */
  meta: string
  /** page de contexte mise en tête du dossier, hors chronologie */
  companion?: Omit<BlogArticle, 'date' | 'dateLabel' | 'readingTime'>
  articles: BlogArticle[]
  /** affiché à la place de la liste tant que le dossier est vide */
  emptyNote?: string
}

export const collections: BlogCollection[] = [
  {
    slug: 'stage-2026',
    eyebrow: 'Dossier 01',
    title: 'Stage 2026 - Infrastructure & réseau',
    description:
      'Le déroulé complet du stage de fin de Bachelor 2 chez un indépendant : administration de son infrastructure, conteneurisation, intégration continue, difficultés rencontrées et bilan. Contient la présentation de la structure d\'accueil et six articles techniques.',
    meta: 'Mai - juillet 2026',
    companion: companyPage,
    articles,
  },
  {
    slug: 'agence-immobiliere',
    eyebrow: 'Dossier 02',
    title: 'Ymmo - Plateforme immobilière',
    description:
      'Retour technique sur Ymmo, plateforme immobilière construite en microservices : backend C# ASP.NET Core, service d\'analyse Python et interface React. Architecture retenue, authentification à quatre niveaux de rôles, prédiction de prix et déploiement conteneurisé.',
    meta: 'Projet académique - 2026',
    articles: [],
    emptyNote: 'Articles en cours de rédaction.',
  },
]

/** nombre d'entrées lisibles dans un dossier, page de contexte comprise */
export function collectionSize(c: BlogCollection): number {
  return c.articles.length + (c.companion ? 1 : 0)
}

/**
 * Ordre de lecture du blog : du plus ancien au plus récent.
 * Un blog classique se lit à l'envers (dernier billet en tête) ; ici le dossier
 * raconte un stage, donc il se lit dans l'ordre où il s'est déroulé.
 * Source unique de vérité : la liste et la navigation d'article s'en servent
 * toutes les deux, elles ne peuvent donc pas diverger.
 */
export function chronological(list: BlogArticle[]): BlogArticle[] {
  return [...list].sort((a, b) => (a.date < b.date ? -1 : 1))
}

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find(a => a.slug === slug)
}

/** true tant qu'il reste des blocs « à compléter » quelque part */
export function hasPendingTodos(): boolean {
  const all = [...articles.flatMap(a => a.sections), ...companyPage.sections]
  return all.some(s => s.type === 'todo')
}
