import { useLang } from '../../context/LangContext'
import { TransitionLink } from '../../components/PageTransition/PageTransition'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import { articles, companyPage } from '../../blog/articles'
import styles from './Blog.module.css'

export default function Blog() {
  const { tr, lang } = useLang()
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="page">
      <BlueprintBackground />
      <div className="page-corner">05 / 06</div>

      <div className={styles.inner}>
        <span className="eyebrow">05</span>
        <h1 className={`page-title ${styles.title}`}>{tr.blog.title}</h1>
        <p className={styles.intro}>
          {tr.blog.intro}
          {lang === 'en' && tr.blog.fr_note && (
            <span className={styles.frNote}> {tr.blog.fr_note}</span>
          )}
        </p>

        {/* Contexte & entreprise — élément imposé, mis en avant */}
        <TransitionLink to="/blog/entreprise" className={styles.companyCard}>
          <span className={styles.companyEyebrow}>{tr.blog.company_eyebrow}</span>
          <span className={styles.companyTitle}>{companyPage.title}</span>
          <span className={styles.companyExcerpt}>{companyPage.excerpt}</span>
          <span className={styles.companyArrow}>{tr.blog.read_more} →</span>
        </TransitionLink>

        <div className={styles.list}>
          {sorted.map(article => (
            <TransitionLink
              key={article.slug}
              to={`/blog/${article.slug}`}
              className={styles.row}
            >
              <span className={styles.rowMeta}>
                <span className={styles.rowDate}>{article.dateLabel}</span>
                <span className={styles.rowReading}>
                  {article.readingTime} {tr.blog.reading_time_suffix}
                </span>
              </span>
              <span className={styles.rowBody}>
                <span className={styles.rowTitle}>{article.title}</span>
                <span className={styles.rowExcerpt}>{article.excerpt}</span>
                <span className={styles.rowTags}>
                  {article.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </span>
              </span>
              <span className={styles.rowArrow}>→</span>
            </TransitionLink>
          ))}
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
