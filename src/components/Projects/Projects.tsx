import { useLang } from '../../context/LangContext'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from './Projects.module.css'

export default function Projects() {
  const { tr } = useLang()

  return (
    <section id="projects">
      <div className="container">
        <span className="section-num">03</span>
        <h2 className="section-title">{tr.projects.title}</h2>

        <div className={styles.grid}>
          {tr.projects.items.map((project, i) => (
            <article key={i} className={styles.card}>
              {/* Preview image — only when live + preview exist */}
              {project.preview && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.previewWrap}
                  tabIndex={-1}
                >
                  <img
                    src={project.preview}
                    alt={`Preview ${project.name}`}
                    className={styles.previewImg}
                    loading="lazy"
                  />
                </a>
              )}

              <div className={styles.body}>
                <div className={styles.cardTop}>
                  {project.status && (
                    <span className={styles.badge}>{project.status}</span>
                  )}
                  <div className={styles.tags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <h3 className={styles.title}>{project.name}</h3>
                <p className={styles.desc}>{project.description}</p>

                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <FiGithub size={15} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <FiExternalLink size={15} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
