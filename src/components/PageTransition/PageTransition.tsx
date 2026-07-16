import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { Link, useLocation, useNavigate, type LinkProps } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import styles from './PageTransition.module.css'

type Phase = 'idle' | 'cover' | 'hold' | 'reveal'

const COVER_MS = 380
const HOLD_MS = 160
const REVEAL_MS = 420

interface TransitionContextType {
  go: (to: string) => void
}

const TransitionContext = createContext<TransitionContextType | null>(null)

function useTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('useTransition must be used within TransitionProvider')
  return ctx
}

/** num + label shown on the covering panel, per destination route */
function useRouteStamp(to: string | null) {
  const { tr, lang } = useLang()
  switch (to) {
    case '/about':
      return { num: '01', name: tr.nav.about }
    case '/experience':
      return { num: '02', name: tr.nav.experience }
    case '/projects':
      return { num: '03', name: tr.nav.projects }
    case '/stack':
      return { num: '04', name: tr.nav.tech }
    case '/contact':
      return { num: '05', name: tr.nav.contact }
    case '/':
      return { num: '00', name: lang === 'fr' ? 'Accueil' : 'Home' }
    default:
      return { num: '', name: '' }
  }
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [target, setTarget] = useState<string | null>(null)
  const timers = useRef<number[]>([])
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const stamp = useRouteStamp(target)

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const go = useCallback(
    (to: string) => {
      if (to === pathname) return
      if (phase !== 'idle') return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        navigate(to)
        return
      }
      setTarget(to)
      setPhase('cover')
      timers.current.push(
        window.setTimeout(() => {
          navigate(to)
          setPhase('hold')
        }, COVER_MS),
        window.setTimeout(() => setPhase('reveal'), COVER_MS + HOLD_MS),
        window.setTimeout(() => {
          setPhase('idle')
          setTarget(null)
        }, COVER_MS + HOLD_MS + REVEAL_MS),
      )
    },
    [navigate, pathname, phase],
  )

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}

      <div className={`${styles.overlay} ${styles[phase]}`} aria-hidden="true">
        <div className={styles.panel}>
          <div className={styles.panelGrid} />
          <div className={styles.edgeLead} />
          <div className={styles.edgeTrail} />

          <div className={styles.stamp}>
            <span className={styles.stampNum}>{stamp.num}</span>
            <span className={styles.stampRule} />
            <span className={styles.stampName}>{stamp.name}</span>
          </div>

          <div className={`${styles.tick} ${styles.tickTl}`} />
          <div className={`${styles.tick} ${styles.tickBr}`} />
          <div className={styles.fig}>FIG. {stamp.num} — {stamp.name.toUpperCase()}</div>
        </div>
      </div>
    </TransitionContext.Provider>
  )
}

/** Drop-in replacement for react-router's <Link> that plays the blueprint
 *  wipe before navigating. Modified clicks (new tab, etc.) behave natively. */
export function TransitionLink({ to, onClick, children, ...rest }: LinkProps) {
  const { go } = useTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    go(typeof to === 'string' ? to : (to.pathname ?? '/'))
  }

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
