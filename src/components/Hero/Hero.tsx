import { useLang } from '../../context/LangContext'
import { FiDownload } from 'react-icons/fi'
import styles from './Hero.module.css'

const CV_HREF = '/cv/GOURRIN_DIMITRI_CV.pdf'
const CV_FILENAME = 'GOURRIN_DIMITRI_CV.pdf'

export default function Hero() {
  const { tr } = useLang()

  return (
    <section className={styles.hero} id="hero">
      {/* Background decorative blobs */}
      <div className={styles.blobs} aria-hidden="true">
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>

      <div className={`${styles.content} container`}>
        <span className={styles.tag}>{tr.hero.tag}</span>
        <h1 className={styles.name}>{tr.hero.name}</h1>
        <p className={styles.tagline}>{tr.hero.tagline}</p>
        <p className={styles.alternance}>{tr.hero.alternance}</p>
        <div className={styles.ctas}>
          <a href="#projects" className={styles.ctaPrimary}>
            {tr.hero.cta_projects}
          </a>
          <a
            href={CV_HREF}
            download={CV_FILENAME}
            className={styles.ctaCv}
            aria-label={tr.hero.cta_cv}
          >
            <FiDownload className={styles.ctaCvIcon} aria-hidden />
            {tr.hero.cta_cv}
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            {tr.hero.cta_contact}
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scrollHint} aria-label="Scroll to about">↓</a>
    </section>
  )
}
