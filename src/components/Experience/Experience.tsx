import { useEffect, useRef } from 'react'
import { useLang } from '../../context/LangContext'
import { ExperienceItem } from '../../translations'
import styles from './Experience.module.css'

function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <div className={styles.item}>
      <div className={styles.dot}></div>
      <div className={styles.card}>
        <span className={styles.period}>{item.period}</span>
        <h3 className={styles.role}>{item.role}</h3>
        <p className={styles.company}>{item.company}</p>
        <p className={styles.desc}>{item.description}</p>
        {item.tags.length > 0 && (
          <div className={styles.tags}>
            {item.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const { tr } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const line = progressLineRef.current
    const dot = dotRef.current
    if (!section || !line || !dot) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const raw = (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
      const progress = Math.max(0, Math.min(1, raw * 2.2))
      const pct = `${progress * 100}%`
      line.style.height = pct
      dot.style.top = pct
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        <span className="section-num">02</span>
        <h2 className="section-title">{tr.experience.title}</h2>

        <div className={styles.timelineWrapper}>
          {/* Progressive line: grows from top as you scroll */}
          <div className={styles.progressLine} ref={progressLineRef} />
          {/* Glowing dot: tip of the line */}
          <div className={styles.scrollDot} ref={dotRef} />

          <div className={styles.subsection}>
            <p className={styles.subsectionTitle}>{tr.experience.formation_label}</p>
            <div className={styles.timeline}>
              {tr.experience.formation.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </div>

          <div className={styles.subsection}>
            <p className={styles.subsectionTitle}>{tr.experience.pro_label}</p>
            <div className={styles.timeline}>
              {tr.experience.items.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
