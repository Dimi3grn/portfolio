import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import { TransitionLink } from '../../components/PageTransition/PageTransition'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import NotFound from '../NotFound/NotFound'
import {
  articles,
  chronological,
  companyPage,
  getArticle,
  type ArticleSection,
} from '../../blog/articles'
import styles from './BlogArticle.module.css'

function Section({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case 'h2':
      return <h2 className={styles.h2}>{section.text}</h2>
    case 'p':
      return <p className={styles.p}>{section.text}</p>
    case 'ul':
      return (
        <ul className={styles.ul}>
          {section.items.map(item => (
            <li key={item}>
              <span className={styles.bulletDot} />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'img':
      return (
        <figure className={styles.figure}>
          <img src={section.src} alt={section.alt} loading="lazy" />
          {section.caption && <figcaption>{section.caption}</figcaption>}
        </figure>
      )
    case 'code':
      return (
        <pre className={styles.code}>
          <code>{section.text}</code>
        </pre>
      )
    case 'quote':
      return <blockquote className={styles.quote}>{section.text}</blockquote>
    case 'todo':
      return (
        <div className={styles.todo}>
          <span className={styles.todoLabel}>À compléter avant publication</span>
          {section.text}
        </div>
      )
  }
}

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const { tr } = useLang()

  const isCompany = slug === companyPage.slug
  const article = isCompany ? null : getArticle(slug ?? '')
  const content = isCompany ? companyPage : article

  useEffect(() => {
    if (content) document.title = `${content.title} - Dimitri Gourrin`
  }, [content])

  if (!content) return <NotFound />

  // Chaîne de lecture complète : contexte → premier article → … → bilan.
  // La page de contexte ouvre la série, elle n'a donc pas de précédent.
  const sorted = chronological(articles)
  const idx = article ? sorted.findIndex(a => a.slug === article.slug) : -1
  const step: { slug: string; title: string } | null = null
  const prev = isCompany ? step : idx > 0 ? sorted[idx - 1] : companyPage
  const next = isCompany
    ? (sorted[0] ?? step)
    : idx >= 0 && idx < sorted.length - 1
      ? sorted[idx + 1]
      : step

  return (
    <div className="page">
      <BlueprintBackground />

      <article className={styles.inner}>
        <TransitionLink to="/blog" className={styles.back}>
          ← {tr.blog.back_to_list}
        </TransitionLink>

        <header className={styles.header}>
          {isCompany ? (
            <span className={styles.meta}>
              <span className={styles.metaAccent}>{tr.blog.company_eyebrow}</span>
            </span>
          ) : (
            <span className={styles.meta}>
              <span className={styles.metaAccent}>{article!.dateLabel}</span>
              <span className={styles.metaSep}>·</span>
              <span>
                {article!.readingTime} {tr.blog.reading_time_suffix}
              </span>
            </span>
          )}
          <h1 className={styles.title}>{content.title}</h1>
          <div className={styles.tags}>
            {content.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className={styles.body}>
          {content.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>

        <footer className={styles.footer}>
          {prev ? (
            <TransitionLink to={`/blog/${prev.slug}`} className={styles.footerPrev}>
              ← {prev.title}
            </TransitionLink>
          ) : (
            <span />
          )}
          {next ? (
            <TransitionLink to={`/blog/${next.slug}`} className={styles.footerNext}>
              {next.title} →
            </TransitionLink>
          ) : (
            <TransitionLink to="/blog" className={styles.footerNext}>
              {tr.blog.back_to_list} →
            </TransitionLink>
          )}
        </footer>
      </article>
    </div>
  )
}
