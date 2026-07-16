import { useLang } from '../../context/LangContext'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import styles from './About.module.css'

export default function About() {
  const { tr, lang } = useLang()

  return (
    <div className="page">
      <BlueprintBackground />
      <div className="page-corner">01 / 06</div>

      <div className={styles.inner}>
        <span className="eyebrow">01</span>
        <h1 className={`page-title ${styles.title}`}>{tr.about.title}</h1>

        <div className={styles.columns}>
          <p className={styles.body}>{tr.about.body}</p>

          <ul className={styles.facts}>
            {tr.about.facts.map((fact, i) => (
              <li key={fact} className={i < tr.about.facts.length - 1 ? styles.factDivided : ''}>
                <span className={styles.factDot} />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerSlot}>
          <PageFooterNav
            prevTo="/"
            prevLabel={lang === 'fr' ? 'Accueil' : 'Home'}
            nextTo="/experience"
            nextLabel={tr.experience.title}
          />
        </div>
      </div>
    </div>
  )
}
