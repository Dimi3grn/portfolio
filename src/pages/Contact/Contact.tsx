import { useEffect, useRef, useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { useLang } from '../../context/LangContext'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import styles from './Contact.module.css'

const EMAIL = 'dgourrin2312@gmail.com'

export default function Contact() {
  const { tr, lang } = useLang()
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef<number>()

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  // mailto: does nothing on machines without a mail client — copy the
  // address too, with visible feedback, so the card always "works"
  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {})
    setCopied(true)
    clearTimeout(copyTimer.current)
    copyTimer.current = window.setTimeout(() => setCopied(false), 2200)
  }

  const externalLinks = [
    {
      href: 'https://linkedin.com/in/d-gourrin',
      Icon: FaLinkedinIn,
      label: tr.contact.linkedin_label,
      sub: 'linkedin.com/in/d-gourrin',
    },
    {
      href: 'https://github.com/Dimi3grn',
      Icon: SiGithub,
      label: tr.contact.github_label,
      sub: 'github.com/Dimi3grn',
    },
  ]

  return (
    <div className={`page ${styles.page}`}>
      <BlueprintBackground />
      <div className="page-corner">06 / 06</div>

      <div className={styles.inner}>
        <span className="eyebrow">06</span>
        <h1 className={`page-title ${styles.title}`}>{tr.contact.title}</h1>
        <p className={styles.tagline}>{tr.contact.tagline}</p>

        <div className={styles.links}>
          <a href={`mailto:${EMAIL}`} className={styles.card} onClick={copyEmail}>
            <span className={styles.iconSwatch}>
              <FiMail size={17} />
            </span>
            <span className={styles.cardText}>
              <span className={styles.cardLabel}>{tr.contact.email_label}</span>
              <span className={`${styles.cardSub} ${copied ? styles.cardSubCopied : ''}`}>
                {copied
                  ? (lang === 'fr' ? 'Adresse copiée !' : 'Address copied!')
                  : EMAIL}
              </span>
            </span>
            <span className={styles.arrow}>{copied ? '✓' : '→'}</span>
          </a>

          {externalLinks.map(({ href, Icon, label, sub }) => (
            <a
              key={label}
              href={href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconSwatch}>
                <Icon size={17} />
              </span>
              <span className={styles.cardText}>
                <span className={styles.cardLabel}>{label}</span>
                <span className={styles.cardSub}>{sub}</span>
              </span>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>

        <p className={styles.copyright}>© 2026 Dimitri Gourrin</p>
      </div>

      <div className={styles.footer}>
        <PageFooterNav
          prevTo="/blog"
          prevLabel={tr.nav.blog}
          nextTo="/"
          nextLabel={lang === 'fr' ? 'Accueil' : 'Home'}
        />
      </div>
    </div>
  )
}
