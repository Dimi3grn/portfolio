import { useLang } from '../../context/LangContext'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import styles from './Contact.module.css'

export default function Contact() {
  const { tr } = useLang()

  const links = [
    {
      icon: <FiMail size={20} />,
      label: tr.contact.email_label,
      href: 'mailto:dgourrin2312@gmail.com',
      sub: 'dgourrin2312@gmail.com',
    },
    {
      icon: <FiLinkedin size={20} />,
      label: tr.contact.linkedin_label,
      href: 'https://linkedin.com/in/d-gourrin',
      sub: 'linkedin.com/in/d-gourrin',
    },
    {
      icon: <FiGithub size={20} />,
      label: tr.contact.github_label,
      href: 'https://github.com/Dimi3grn',
      sub: 'github.com/Dimi3grn',
    },
  ]

  return (
    <section id="contact">
      <div className="container">
        <span className="section-num">05</span>
        <h2 className="section-title">{tr.contact.title}</h2>

        <p className={styles.tagline}>{tr.contact.tagline}</p>

        <div className={styles.links}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkIcon}>{l.icon}</span>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkSub}>{l.sub}</span>
              </span>
              <span className={styles.linkArrow}>→</span>
            </a>
          ))}
        </div>

        <p className={styles.footer}>
          © {new Date().getFullYear()} Dimitri Gourrin
        </p>
      </div>
    </section>
  )
}
