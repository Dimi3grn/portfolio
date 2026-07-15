import { useLang } from '../../context/LangContext'
import { TransitionLink } from '../../components/PageTransition/PageTransition'
import styles from './Landing.module.css'

export default function Landing() {
  const { tr } = useLang()

  return (
    <div className={styles.landing}>
      <div className={styles.gridMask}>
        <div className={styles.grid} />
      </div>

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className={styles.blueprint}
      >
        <defs>
          <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dot 1: circulates the central ring */}
        <circle r="5" fill="#a5514c" filter="url(#dotGlow)">
          <animateMotion
            dur="16s"
            repeatCount="indefinite"
            path="M800,230 A220,220 0 1,1 800,670 A220,220 0 1,1 800,230 Z"
          />
        </circle>

        {/* Dot 2: straight - curve - straight sweep (ping-pong) */}
        <path
          id="sweepPath"
          d="M-40,540 L300,540 C500,540 500,320 700,320 L1640,320"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.25"
        />
        <circle r="5" fill="#a5514c" filter="url(#dotGlow)">
          <animateMotion
            dur="32s"
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
          >
            <mpath href="#sweepPath" />
          </animateMotion>
        </circle>

        {/* Dot 3: polished loop, top-left to bottom bulge to top-center */}
        <path
          id="loopPath"
          d="M0,60 C250,300 560,820 760,820 C960,820 900,200 700,0"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.25"
        />
        <circle r="6.5" fill="#a5514c" filter="url(#dotGlow)">
          <animateMotion dur="14s" repeatCount="indefinite">
            <mpath href="#loopPath" />
          </animateMotion>
        </circle>

        <line x1="0" y1="180" x2="1600" y2="180" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="2 6" />
        <line x1="0" y1="720" x2="1600" y2="720" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="2 6" />
        <line x1="220" y1="0" x2="220" y2="900" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="1380" y1="0" x2="1380" y2="900" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="0" y1="0" x2="560" y2="560" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="1600" y1="900" x2="1040" y2="340" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />

        <circle cx="220" cy="180" r="5" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="1380" cy="720" r="5" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="800" cy="450" r="220" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.25" />
        <circle cx="800" cy="450" r="340" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />

        <line x1="220" y1="170" x2="220" y2="190" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
        <line x1="1380" y1="710" x2="1380" y2="730" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      </svg>

      <div className={styles.scanline} />

      <div className={styles.content}>
        <span className={styles.tag}>{tr.hero.tag}</span>
        <h1 className={styles.name}>{tr.hero.name}</h1>
        <p className={styles.tagline}>{tr.hero.tagline}</p>
        <p className={styles.alternance}>{tr.hero.alternance}</p>
        <div className={styles.ctas}>
          <TransitionLink to="/projects" className={styles.ctaPrimary}>{tr.hero.cta_projects}</TransitionLink>
          <a href="/cv/GOURRIN_DIMITRI_CV.pdf" download className={styles.ctaSecondary}>{tr.hero.cta_cv}</a>
          <TransitionLink to="/contact" className={styles.ctaGhost}>{tr.hero.cta_contact} →</TransitionLink>
        </div>
      </div>
    </div>
  )
}
