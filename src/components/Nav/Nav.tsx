import { useState, useEffect } from 'react'
import { useLang } from '../../context/LangContext'
import styles from './Nav.module.css'

export default function Nav() {
  const { lang, setLang, tr } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '#about', label: tr.nav.about },
    { href: '#experience', label: tr.nav.experience },
    { href: '#projects', label: tr.nav.projects },
    { href: '#tech', label: tr.nav.tech },
    { href: '#contact', label: tr.nav.contact },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoAccent}>D</span>G
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <div className={styles.langToggle}>
            <button
              className={lang === 'fr' ? styles.active : ''}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <span>|</span>
            <button
              className={lang === 'en' ? styles.active : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? styles.lineOpen : ''}></span>
            <span className={menuOpen ? styles.lineOpen : ''}></span>
            <span className={menuOpen ? styles.lineOpen : ''}></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
