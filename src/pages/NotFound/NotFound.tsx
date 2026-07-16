import { useLang } from '../../context/LangContext'
import { TransitionLink } from '../../components/PageTransition/PageTransition'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import styles from './NotFound.module.css'

export default function NotFound() {
  const { lang } = useLang()

  return (
    <div className="page">
      <BlueprintBackground />
      <div className={styles.inner}>
        <span className="eyebrow">{lang === 'fr' ? 'Page introuvable' : 'Page not found'}</span>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>
          {lang === 'fr'
            ? 'Cette planche n’existe pas dans le dossier.'
            : 'This plate doesn’t exist in the set.'}
        </p>
        <TransitionLink to="/" className={styles.homeLink}>
          ← {lang === 'fr' ? 'Retour à l’accueil' : 'Back home'}
        </TransitionLink>
      </div>
    </div>
  )
}
