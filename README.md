# Portfolio — Dimitri Gourrin

Portfolio personnel multi-pages, design system **Paper & Oxblood** (style éditorial "blueprint" : papier chaud, accent oxblood, typographies Spectral / IBM Plex Sans / IBM Plex Mono).

**Live** : [dimitrigourrin.dev](https://dimitrigourrin.dev)

## Stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 5](https://vitejs.dev) (build & dev server)
- [react-router-dom](https://reactrouter.com) — 6 routes, transitions de page custom
- CSS Modules par composant + tokens globaux (`src/index.css`)
- [react-icons](https://react-icons.github.io/react-icons/) pour la stack technique
- Déploiement [Vercel](https://vercel.com) (rewrites SPA dans `vercel.json`)

## Lancer le projet

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de production dans dist/
npm run preview   # sert le build localement
```

## Structure

```
src/
  components/
    Header/               # nav hover-reveal (permanente sur la landing et le mobile)
    PageTransition/       # transition "planche blueprint" entre les pages
    BlueprintBackground/  # fond grille + géométries partagé par les pages intérieures
    PageFooterNav/        # liens précédent / suivant en pied de page
  pages/                  # Landing, About, Experience, Projects, Stack, Contact, NotFound
  context/LangContext.tsx # bascule FR / EN persistée en localStorage
  translations/index.ts   # tout le contenu FR + EN (source unique)
```

## Points notables

- **Bilingue FR/EN** — tout le contenu vit dans `src/translations/index.ts`
- **Transitions de page** — la navigation est différée pendant qu'une planche "blueprint" couvre l'écran (respecte `prefers-reduced-motion`)
- **Animations compositées GPU** — la grille dérivante anime `transform`, jamais `background-position`
- **Previews projets** — miniatures [mShots](https://wordpress.com) cliquables ; incrémenter `PROJECT_PREVIEW_SNAPSHOT_VERSION` pour forcer une recapture après un redéploiement
- **CV téléchargeable** — `public/cv/GOURRIN_DIMITRI_CV.pdf`
