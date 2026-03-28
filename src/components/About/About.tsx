import { useLang } from '../../context/LangContext'
import styles from './About.module.css'

export default function About() {
  const { tr } = useLang()

  return (
    <section id="about">
      <div className="container">
        <span className="section-num">01</span>
        <h2 className="section-title">{tr.about.title}</h2>

        <div className={styles.layout}>
          <p className={styles.body}>{tr.about.body}</p>
          <ul className={styles.facts}>
            {tr.about.facts.map(fact => (
              <li key={fact} className={styles.fact}>
                <span className={styles.factDot}></span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
