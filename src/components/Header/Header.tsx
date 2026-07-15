import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import { TransitionLink } from '../PageTransition/PageTransition'
import styles from './Header.module.css'

type NavKey = 'about' | 'experience' | 'projects' | 'tech' | 'contact'

const NAV_ITEMS: { key: NavKey; path: string }[] = [
  { key: 'about', path: '/about' },
  { key: 'experience', path: '/experience' },
  { key: 'projects', path: '/projects' },
  { key: 'tech', path: '/stack' },
  { key: 'contact', path: '/contact' },
]

export default function Header() {
  const { tr, lang, setLang } = useLang()
  const { pathname } = useLocation()
  const [hovered, setHovered] = useState(false)

  const activeKey = NAV_ITEMS.find(item => item.path === pathname)?.key ?? null
  const sectionLabel = activeKey ? tr.nav[activeKey] : ''
  // on the landing the nav is permanently visible (no hover-reveal)
  const isLanding = pathname === '/'
  const navOpen = isLanding || hovered

  return (
    <div
      className={styles.zone}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.hairline} />

      {sectionLabel && (
        <div className={styles.pillWrap} style={{ opacity: navOpen ? 0 : 1 }}>
          <span className={styles.pill}>{sectionLabel}</span>
        </div>
      )}

      <nav
        className={`${styles.nav} ${navOpen ? styles.navOpen : ''}`}
        aria-label="Navigation principale"
      >
        <TransitionLink to="/" className={styles.logo} onClick={() => setHovered(false)}>
          <span className={styles.logoAccent}>D</span>G
        </TransitionLink>

        <ul className={styles.links}>
          {NAV_ITEMS.map(({ key, path }) => (
            <li key={key}>
              <TransitionLink
                to={path}
                className={`${styles.link} ${activeKey === key ? styles.linkActive : ''}`}
                aria-current={activeKey === key ? 'page' : undefined}
                onClick={e => e.currentTarget.blur()}
              >
                {tr.nav[key]}
              </TransitionLink>
            </li>
          ))}
        </ul>

        <div className={styles.langToggle}>
          <button
            className={`${styles.langBtn} ${lang === 'fr' ? styles.langActive : ''}`}
            onClick={() => setLang('fr')}
          >
            FR
          </button>
          <span className={styles.langSep}>|</span>
          <button
            className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </nav>
    </div>
  )
}
