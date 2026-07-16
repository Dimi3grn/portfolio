import { TransitionLink } from '../PageTransition/PageTransition'
import styles from './PageFooterNav.module.css'

interface PageFooterNavProps {
  prevTo: string
  prevLabel: string
  nextTo: string
  nextLabel: string
}

export default function PageFooterNav({ prevTo, prevLabel, nextTo, nextLabel }: PageFooterNavProps) {
  return (
    <div className={styles.footerNav}>
      <TransitionLink to={prevTo} className={styles.prev}>← {prevLabel}</TransitionLink>
      <TransitionLink to={nextTo} className={styles.next}>{nextLabel} →</TransitionLink>
    </div>
  )
}
