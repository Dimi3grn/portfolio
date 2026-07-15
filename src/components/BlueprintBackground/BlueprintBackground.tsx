import styles from './BlueprintBackground.module.css'

/** Static blueprint backdrop shared by all inner pages: the Landing grid +
 *  construction lines/rings, without the animated dots and scanline. */
export default function BlueprintBackground() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.gridMask}>
        <div className={styles.grid} />
      </div>

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className={styles.blueprint}
      >
        <path
          d="M-40,540 L300,540 C500,540 500,320 700,320 L1640,320"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.25"
        />
        <path
          d="M0,60 C250,300 560,820 760,820 C960,820 900,200 700,0"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.25"
        />

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
    </div>
  )
}
