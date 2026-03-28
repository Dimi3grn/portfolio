import { LangProvider } from './context/LangContext'
import Cursor from './components/Cursor/Cursor'
import ScrollGlow from './components/ScrollGlow/ScrollGlow'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <LangProvider>
      <Cursor />
      <ScrollGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </LangProvider>
  )
}
