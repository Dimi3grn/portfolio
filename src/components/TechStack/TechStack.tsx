import { useLang } from '../../context/LangContext'
import {
  SiOpenjdk, SiGo, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiMysql,
  SiGit, SiGithub, SiBootstrap, SiVercel, SiLinux,
  SiFigma, SiPostman, SiJupyter,
  SiPhp, SiDotnet, SiMariadb, SiDocker, SiRust, SiCplusplus, SiLua,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import styles from './TechStack.module.css'

interface StackItem {
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>
  name: string
  color: string
  url: string
}

// 20 items → diamond rows: 1 + 2 + 3 + 4 + 5 + 5
const mainStack: StackItem[] = [
  // ── Row 1 (1) ──
  { Icon: SiReact,       name: 'React',      color: '#61DAFB', url: 'https://react.dev' },
  // ── Row 2 (2) ──
  { Icon: SiOpenjdk,     name: 'Java',       color: '#f89820', url: 'https://www.java.com' },
  { Icon: SiGo,          name: 'Go',         color: '#00ADD8', url: 'https://go.dev' },
  // ── Row 3 (3) ──
  { Icon: SiPython,      name: 'Python',     color: '#4B8BBE', url: 'https://www.python.org' },
  { Icon: SiDotnet,      name: 'C#',         color: '#9B4F96', url: 'https://dotnet.microsoft.com' },
  { Icon: SiJavascript,  name: 'JavaScript', color: '#F7DF1E', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  // ── Row 4 (4) ──
  { Icon: SiTypescript,  name: 'TypeScript', color: '#3178C6', url: 'https://www.typescriptlang.org' },
  { Icon: SiHtml5,       name: 'HTML5',      color: '#E34F26', url: 'https://developer.mozilla.org/docs/Web/HTML' },
  { Icon: SiCss,         name: 'CSS3',       color: '#2965f1', url: 'https://developer.mozilla.org/docs/Web/CSS' },
  { Icon: SiTailwindcss, name: 'Tailwind',   color: '#06B6D4', url: 'https://tailwindcss.com' },
  // ── Row 5 (5) ──
  { Icon: SiMysql,       name: 'MySQL',      color: '#4479A1', url: 'https://www.mysql.com' },
  { Icon: SiGit,         name: 'Git',        color: '#F05032', url: 'https://git-scm.com' },
  { Icon: SiGithub,      name: 'GitHub',     color: '#e0e0e0', url: 'https://github.com' },
  { Icon: SiBootstrap,   name: 'Bootstrap',  color: '#7952B3', url: 'https://getbootstrap.com' },
  { Icon: SiVercel,      name: 'Vercel',     color: '#e0e0e0', url: 'https://vercel.com' },
  // ── Row 6 (5) ──
  { Icon: VscVscode,     name: 'VS Code',    color: '#007ACC', url: 'https://code.visualstudio.com' },
  { Icon: SiFigma,       name: 'Figma',      color: '#F24E1E', url: 'https://www.figma.com' },
  { Icon: SiPostman,     name: 'Postman',    color: '#FF6C37', url: 'https://www.postman.com' },
  { Icon: SiJupyter,     name: 'Jupyter',    color: '#F37626', url: 'https://jupyter.org' },
  { Icon: SiLinux,       name: 'Linux',      color: '#e8c84a', url: 'https://www.linux.org' },
]

const secondaryStack: StackItem[] = [
  { Icon: SiPhp,       name: 'PHP',       color: '#8892be', url: 'https://www.php.net' },
  { Icon: SiMariadb,   name: 'MariaDB',   color: '#c0765a', url: 'https://mariadb.org' },
  { Icon: SiDocker,    name: 'Docker',    color: '#2496ED', url: 'https://www.docker.com' },
  { Icon: SiRust,      name: 'Rust',      color: '#CE422B', url: 'https://www.rust-lang.org' },
  { Icon: SiCplusplus, name: 'C / C++',   color: '#659bd3', url: 'https://isocpp.org' },
  { Icon: SiLua,       name: 'Lua',       color: '#6a8fc8', url: 'https://www.lua.org' },
]

const DIAMOND_ROWS = [1, 2, 3, 4, 5, 5]

function splitIntoRows(items: StackItem[], rowSizes: number[]): StackItem[][] {
  const rows: StackItem[][] = []
  let cursor = 0
  for (const size of rowSizes) {
    rows.push(items.slice(cursor, cursor + size))
    cursor += size
  }
  return rows
}

function DiamondGrid({ items }: { items: StackItem[] }) {
  const rows = splitIntoRows(items, DIAMOND_ROWS)
  return (
    <div className={styles.diamond}>
      {rows.map((row, ri) => (
        <div key={ri} className={styles.diamondRow}>
          {row.map(({ Icon, name, color, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
            >
              <Icon className={styles.icon} style={{ color }} size={28} />
              <span className={styles.label}>{name}</span>
            </a>
          ))}
        </div>
      ))}
    </div>
  )
}

function FlatGrid({ items }: { items: StackItem[] }) {
  return (
    <div className={styles.flat}>
      {items.map(({ Icon, name, color, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.item} ${styles.itemSm}`}
        >
          <Icon className={styles.icon} style={{ color }} size={22} />
          <span className={styles.label}>{name}</span>
        </a>
      ))}
    </div>
  )
}

export default function TechStack() {
  const { tr } = useLang()

  return (
    <section id="tech" className={styles.section}>
      <div className="container">
        <span className="section-num">04</span>
        <h2 className="section-title">{tr.tech.title}</h2>

        <div className={styles.tier}>
          <p className={styles.tierLabel}>{tr.tech.main_label}</p>
          <DiamondGrid items={mainStack} />
        </div>

        <div className={styles.tier}>
          <p className={styles.tierLabel}>{tr.tech.secondary_label}</p>
          <FlatGrid items={secondaryStack} />
        </div>
      </div>
    </section>
  )
}
