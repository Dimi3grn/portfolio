import { useCallback, useEffect, useState } from 'react'
import { useLang } from '../../context/LangContext'
import { TransitionLink } from '../../components/PageTransition/PageTransition'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import {
  chronological,
  collections,
  collectionSize,
  type BlogCollection,
} from '../../blog/articles'
import styles from './Blog.module.css'

const STORAGE_KEY = 'blog:dossier-ouvert'

export default function Blog() {
  const { tr, lang } = useLang()
  const [open, setOpen] = useState<string | null>(null)

  // rouvre le dossier consulté juste avant, au retour depuis un article
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY)
      if (saved && collections.some(c => c.slug === saved)) setOpen(saved)
    } catch {
      /* stockage indisponible : on reste replié */
    }
  }, [])

  const toggle = useCallback((slug: string) => {
    setOpen(current => {
      const next = current === slug ? null : slug
      try {
        if (next) sessionStorage.setItem(STORAGE_KEY, next)
        else sessionStorage.removeItem(STORAGE_KEY)
      } catch {
        /* sans persistance, le dépliage reste fonctionnel */
      }
      return next
    })
  }, [])

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

        <div className={styles.collections}>
          {collections.map(collection => (
            <Dossier
              key={collection.slug}
              collection={collection}
              open={open === collection.slug}
              onToggle={() => toggle(collection.slug)}
            />
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

function Dossier({
  collection,
  open,
  onToggle,
}: {
  collection: BlogCollection
  open: boolean
  onToggle: () => void
}) {
  const { tr } = useLang()
  const panelId = `dossier-${collection.slug}`
  const sorted = chronological(collection.articles)
  const size = collectionSize(collection)

  return (
    <section className={styles.dossier} data-open={open}>
      <button
        type="button"
        className={styles.head}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={styles.headText}>
          <span className={styles.dossierEyebrow}>{collection.eyebrow}</span>
          <span className={styles.dossierTitle}>{collection.title}</span>
          <span className={styles.dossierDesc}>{collection.description}</span>
          <span className={styles.dossierMeta}>
            <span>{collection.meta}</span>
            <span className={styles.metaSep} aria-hidden="true">·</span>
            {/* « 0 entrée » sonnerait cassé : un dossier vide annonce son état */}
            <span>
              {size === 0
                ? tr.blog.entries_none
                : `${size} ${size > 1 ? tr.blog.entries_plural : tr.blog.entries_singular}`}
            </span>
          </span>
        </span>
        <span className={styles.toggle} aria-hidden="true" />
      </button>

      {/* pas d'attribut hidden : le repli est géré en CSS pour rester animable,
          et .panelInner passe en visibility:hidden une fois la transition finie */}
      <div className={styles.panel} id={panelId} role="region" aria-label={collection.title}>
        <div className={styles.panelInner}>
          <div className={styles.panelBody}>
            {collection.companion && (
              <TransitionLink
                to={`/blog/${collection.companion.slug}`}
                className={`${styles.row} ${styles.rowContext}`}
                tabIndex={open ? undefined : -1}
              >
                <span className={styles.rowMeta}>
                  <span className={styles.rowContextTag}>{tr.blog.company_eyebrow}</span>
                </span>
                <span className={styles.rowBody}>
                  <span className={styles.rowTitle}>{collection.companion.title}</span>
                  <span className={styles.rowExcerpt}>{collection.companion.excerpt}</span>
                </span>
                <span className={styles.rowArrow} aria-hidden="true">→</span>
              </TransitionLink>
            )}

            {sorted.map(article => (
              <TransitionLink
                key={article.slug}
                to={`/blog/${article.slug}`}
                className={styles.row}
                tabIndex={open ? undefined : -1}
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
                <span className={styles.rowArrow} aria-hidden="true">→</span>
              </TransitionLink>
            ))}

            {sorted.length === 0 && collection.emptyNote && (
              <p className={styles.empty}>{collection.emptyNote}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
