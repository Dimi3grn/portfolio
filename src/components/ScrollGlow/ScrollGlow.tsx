import { useEffect, useRef } from 'react'
import styles from './ScrollGlow.module.css'

export default function ScrollGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      if (glowRef.current) {
        // moves from 5vh at top to 85vh at bottom
        const vhPos = 5 + progress * 80
        glowRef.current.style.top = `${vhPos}vh`
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div ref={glowRef} className={styles.glow} aria-hidden="true" />
}
