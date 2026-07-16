import { useLang } from '../../context/LangContext'
import {
  SiOpenjdk, SiGo, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiMysql,
  SiGit, SiGithub, SiBootstrap, SiVercel, SiLinux,
  SiFigma, SiPostman, SiJupyter,
  SiPhp, SiDotnet, SiMariadb, SiDocker, SiRust, SiCplusplus, SiLua,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import BlueprintBackground from '../../components/BlueprintBackground/BlueprintBackground'
import PageFooterNav from '../../components/PageFooterNav/PageFooterNav'
import styles from './Stack.module.css'

interface StackItem {
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>
  name: string
  color: string
  url: string
}

// 20 items → diamond rows: 1 + 2 + 3 + 4 + 5 + 5
// Colors from the Paper & Oxblood handoff (brand hexes, darkened where
// too light for a white background: GitHub, Vercel, Linux, JS, …).
const mainStack: StackItem[] = [
  // ── Row 1 (1) ──
  { Icon: SiReact,       name: 'React',      color: '#2596a8', url: 'https://react.dev' },
  // ── Row 2 (2) ──
  { Icon: SiOpenjdk,     name: 'Java',       color: '#c97812', url: 'https://www.java.com' },
  { Icon: SiGo,          name: 'Go',         color: '#0089ac', url: 'https://go.dev' },
  // ── Row 3 (3) ──
  { Icon: SiPython,      name: 'Python',     color: '#3d6d94', url: 'https://www.python.org' },
  { Icon: SiDotnet,      name: 'C#',         color: '#9B4F96', url: 'https://dotnet.microsoft.com' },
  { Icon: SiJavascript,  name: 'JavaScript', color: '#a68b00', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  // ── Row 4 (4) ──
  { Icon: SiTypescript,  name: 'TypeScript', color: '#3178C6', url: 'https://www.typescriptlang.org' },
  { Icon: SiHtml5,       name: 'HTML5',      color: '#E34F26', url: 'https://developer.mozilla.org/docs/Web/HTML' },
  { Icon: SiCss,         name: 'CSS3',       color: '#2965f1', url: 'https://developer.mozilla.org/docs/Web/CSS' },
  { Icon: SiTailwindcss, name: 'Tailwind',   color: '#06B6D4', url: 'https://tailwindcss.com' },
  // ── Row 5 (5) ──
  { Icon: SiMysql,       name: 'MySQL',      color: '#4479A1', url: 'https://www.mysql.com' },
  { Icon: SiGit,         name: 'Git',        color: '#F05032', url: 'https://git-scm.com' },
  { Icon: SiGithub,      name: 'GitHub',     color: '#333333', url: 'https://github.com' },
  { Icon: SiBootstrap,   name: 'Bootstrap',  color: '#7952B3', url: 'https://getbootstrap.com' },
  { Icon: SiVercel,      name: 'Vercel',     color: '#161310', url: 'https://vercel.com' },
  // ── Row 6 (5) ──
  { Icon: VscVscode,     name: 'VS Code',    color: '#007ACC', url: 'https://code.visualstudio.com' },
  { Icon: SiFigma,       name: 'Figma',      color: '#F24E1E', url: 'https://www.figma.com' },
  { Icon: SiPostman,     name: 'Postman',    color: '#FF6C37', url: 'https://www.postman.com' },
  { Icon: SiJupyter,     name: 'Jupyter',    color: '#F37626', url: 'https://jupyter.org' },
  { Icon: SiLinux,       name: 'Linux',      color: '#b8860b', url: 'https://www.linux.org' },
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

export default function Stack() {
  const { tr } = useLang()
  const rows = splitIntoRows(mainStack, DIAMOND_ROWS)

  return (
    <div className="page">
      <BlueprintBackground />
      <div className="page-corner">04 / 06</div>

      <div className={styles.inner}>
        <span className="eyebrow">04</span>
        <h1 className={`page-title ${styles.title}`}>{tr.tech.title}</h1>

        <p className={styles.tierLabel}>{tr.tech.main_label}</p>
        <div className={styles.diamond}>
          {rows.map((row, ri) => (
            <div key={ri} className={styles.diamondRow}>
              {row.map(({ Icon, name, color, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.chip}
                  style={{ color }}
                >
                  <span className={styles.chipCard}>
                    <Icon size={22} style={{ color }} />
                  </span>
                  <span className={styles.chipLabel}>{name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>

        <p className={styles.tierLabelSecondary}>{tr.tech.secondary_label}</p>
        <div className={styles.pillRow}>
          {secondaryStack.map(({ Icon, name, color, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pill}
              style={{ color }}
            >
              <span className={styles.pillSwatch}>
                <Icon size={16} style={{ color }} />
              </span>
              <span className={styles.pillLabel}>{name}</span>
            </a>
          ))}
        </div>

        <div className={styles.footerSlot}>
          <PageFooterNav
            prevTo="/projects"
            prevLabel={tr.nav.projects}
            nextTo="/blog"
            nextLabel={tr.nav.blog}
          />
        </div>
      </div>
    </div>
  )
}
