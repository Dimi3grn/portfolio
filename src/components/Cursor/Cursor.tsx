import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
    }

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label'

    const onLeave = () => { el.style.opacity = '0' }
    const onEnter = () => { el.style.opacity = '1' }
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest(INTERACTIVE)) {
        el.style.opacity = '0'
      } else {
        el.style.opacity = '1'
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className={styles.cursor} aria-hidden="true" />
}
