import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LangProvider, useLang } from './context/LangContext'
import { TransitionProvider } from './components/PageTransition/PageTransition'
import Header from './components/Header/Header'
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Stack from './pages/Stack/Stack'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/** Per-page <title> + <html lang> kept in sync with the route and language. */
function PageMeta() {
  const { pathname } = useLocation()
  const { tr, lang } = useLang()

  useEffect(() => {
    document.documentElement.lang = lang
    const sections: Record<string, string> = {
      '/about': tr.nav.about,
      '/experience': tr.experience.title,
      '/projects': tr.nav.projects,
      '/stack': tr.nav.tech,
      '/contact': tr.nav.contact,
    }
    const base = lang === 'fr'
      ? 'Dimitri Gourrin — Développeur Fullstack'
      : 'Dimitri Gourrin — Fullstack Developer'
    const section = sections[pathname]
    document.title = section ? `${section} — Dimitri Gourrin` : base
  }, [pathname, lang, tr])

  return null
}

export default function App() {
  return (
    <LangProvider>
      <TransitionProvider>
        <ScrollToTop />
        <PageMeta />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </TransitionProvider>
    </LangProvider>
  )
}
