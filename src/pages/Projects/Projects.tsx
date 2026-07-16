import { useState } from 'react'
import { useLang } from '../../context/LangContext'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import styles from './Projects.module.css'

function ProjectPreview({
  preview,
  live,
  name,
}: {
  preview: string
  live: string
  name: string
}) {
  const [show, setShow] = useState(true)
  if (!show) return null
  return (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.previewWrap}
      tabIndex={-1}
    >
      <img
        src={preview}
        alt={`Preview ${name}`}
        className={styles.previewImg}
        loading="lazy"
        decoding="async"
        onError={() => setShow(false)}
      />
    </a>
  )
}

export default function Projects() {
  const { tr } = useLang()

  return (
    <div className="page">
      <BlueprintBackground />
      <div className="page-corner">03 / 06</div>

      <div className={styles.inner}>
        <span className="eyebrow">03</span>
        <h1 className={`page-title ${styles.title}`}>{tr.projects.title}</h1>

        <div className={styles.grid}>
          {tr.projects.items.map(project => (
            <article key={project.name} className={styles.card}>
              {project.preview && project.live && (
                <ProjectPreview
                  key={project.preview}
                  preview={project.preview}
                  live={project.live}
                  name={project.name}
                />
              )}
              {project.status ? (
                <div className={styles.badgeRow}>
                  <span className={styles.badge}>{project.status}</span>
                </div>
              ) : (
                <div className={styles.badgeSpacer} />
              )}
              <h3 className={styles.cardTitle}>{project.name}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live ↗</a>
                )}
              </div>
            </article>
          ))}
        </div>

        <PageFooterNav
          prevTo="/experience"
          prevLabel={tr.experience.title}
          nextTo="/stack"
          nextLabel={tr.nav.tech}
        />
      </div>
    </div>
  )
}
