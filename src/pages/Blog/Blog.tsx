import { useLang } from '../../context/LangContext'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import styles from './Blog.module.css'

export default function Blog() {
  const { tr } = useLang()

  return (
    <div className="page">
      <BlueprintBackground />
      <div className="page-corner">05 / 06</div>

      <div className={styles.inner}>
        <span className="eyebrow">05</span>
        <h1 className={`page-title ${styles.title}`}>{tr.blog.title}</h1>

        <div className={styles.placeholder}>
          <span className={styles.placeholderDot} />
          <p className={styles.placeholderTitle}>{tr.blog.wip_title}</p>
          <p className={styles.placeholderBody}>{tr.blog.wip_body}</p>
        </div>

        <div className={styles.footerSlot}>
          <PageFooterNav
            prevTo="/stack"
            prevLabel={tr.nav.tech}
            nextTo="/contact"
            nextLabel={tr.nav.contact}
          />
        </div>
      </div>
    </div>
  )
}
