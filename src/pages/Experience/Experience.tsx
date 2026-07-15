import { Fragment, useEffect, useRef, type ReactNode } from 'react'
import { useLang } from '../../context/LangContext'
import { ExperienceItem } from '../../translations'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import styles from './Experience.module.css'

/** Renders `**bold**` segments as <strong> (optional in any experience description). */
function DescriptionWithBold({ text, className }: { text: string; className: string }) {
  const parts: ReactNode[] = []
  const re = /\*\*(.+?)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push(<strong key={k++}>{m[1]}</strong>)
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <p className={className}>{parts.length ? <Fragment>{parts}</Fragment> : text}</p>
}

function TimelineItem({ item, last }: { item: ExperienceItem; last?: boolean }) {
  return (
    <div className={`${styles.item} ${last ? styles.itemLast : ''}`}>
      <div className={styles.markerRing} />
      <div className={styles.markerCenter} />
      <span className={styles.period}>{item.period}</span>
      <h3 className={styles.role}>{item.role}</h3>
      <p className={styles.company}>{item.company}</p>
      {item.description && (
        <DescriptionWithBold text={item.description} className={styles.desc} />
      )}
      {item.bullets && (
        <ul className={styles.bullets}>
          {item.bullets.map(bullet => (
            <li key={bullet}>
              <span className={styles.bulletDot} />
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {item.linkUrl && item.linkLabel && (
        <a
          href={item.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.articleLink}
        >
          {item.linkLabel}
        </a>
      )}
      {item.tags.length > 0 && (
        <div className={styles.tags}>
          {item.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  const { tr } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const line = progressLineRef.current
    const dot = dotRef.current
    if (!section || !line || !dot) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const scrollY = window.scrollY
      const absTop = rect.top + scrollY
      // starts when the section top reaches 35% from the viewport top;
      // ends there too, but never later than the page's max scroll so the
      // dot always hits the bottom when the page is fully scrolled
      const startY = absTop - vh * 0.35
      const maxScrollY = document.documentElement.scrollHeight - vh
      const endY = Math.min(absTop + rect.height - vh * 0.35, maxScrollY)
      const raw = (scrollY - startY) / Math.max(1, endY - startY)
      const progress = Math.max(0, Math.min(1, raw))
      const pct = `${progress * 100}%`
      line.style.height = pct
      dot.style.top = pct
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const groups: { label: string; items: ExperienceItem[] }[] = [
    { label: tr.experience.formation_label, items: tr.experience.formation },
    { label: tr.experience.achievements_label, items: tr.experience.achievements },
    { label: tr.experience.pro_label, items: tr.experience.items },
  ].filter(g => g.items.length > 0)

  return (
    <div className="page">
      <BlueprintBackground />
      <div className="page-corner">02 / 05</div>

      <div className={styles.inner}>
        <span className="eyebrow">02</span>
        <h1 className={`page-title ${styles.title}`}>{tr.experience.title}</h1>

        <div className={styles.timeline} ref={sectionRef}>
          <div className={styles.progressLine} ref={progressLineRef} />
          <div className={styles.progressDot} ref={dotRef} />

          {groups.map((group, gi) => (
            <Fragment key={group.label}>
              <p className={styles.groupLabel}>{group.label}</p>
              {group.items.map((item, i) => (
                <TimelineItem
                  key={`${gi}-${i}`}
                  item={item}
                  last={gi === groups.length - 1 && i === group.items.length - 1}
                />
              ))}
            </Fragment>
          ))}
        </div>

        <PageFooterNav
          prevTo="/about"
          prevLabel={tr.nav.about}
          nextTo="/projects"
          nextLabel={tr.nav.projects}
        />
      </div>
    </div>
  )
}
