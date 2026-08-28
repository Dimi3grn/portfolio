import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'

const arbre = (
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
    <Analytics />
  </StrictMode>
)

const racine = document.getElementById('root')!

// Les pages sont prérendues au build : on hydrate le HTML existant au lieu de
// le jeter pour tout reconstruire. Le rendu classique reste le chemin de repli
// (dev, ou une route inconnue servie par le fallback SPA).
if (racine.firstChild) {
  hydrateRoot(racine, arbre)
} else {
  createRoot(racine).render(arbre)
}
