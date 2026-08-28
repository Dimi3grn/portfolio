/**
 * Prérendu : écrit un fichier HTML par route, contenu et métadonnées inclus.
 *
 * Se lance après les deux builds Vite (client puis SSR) :
 *   dist/index.html      -> gabarit, avec les bons chemins d'assets
 *   dist-ssr/entry-server.js -> le rendu React et la table des métadonnées
 *
 * Résultat : dist/blog/bilan-stage-2026/index.html contient réellement le texte
 * de l'article, ses balises og: propres, et le point de montage prêt à être
 * hydraté par le bundle client.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(racine, 'dist')

const echappe = s =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** remplace la valeur d'une balise meta existante, ou la laisse telle quelle */
function remplaceMeta(html, selecteur, valeur) {
  const motif = new RegExp(
    `(<meta\\s+${selecteur}\\s+content=")[^"]*(")`,
    'i',
  )
  return html.replace(motif, `$1${echappe(valeur)}$2`)
}

async function main() {
  const { render, allPages, SITE_URL } = await import(
    pathToFileURL(join(racine, 'dist-ssr', 'entry-server.js')).href
  )

  const gabarit = await readFile(join(dist, 'index.html'), 'utf-8')
  const pages = allPages()

  if (!gabarit.includes('<div id="root"></div>')) {
    throw new Error('Point de montage introuvable dans dist/index.html')
  }

  for (const page of pages) {
    const corps = render(page.path)

    let html = gabarit
      .replace('<div id="root"></div>', `<div id="root">${corps}</div>`)
      .replace(/<title>[^<]*<\/title>/i, `<title>${echappe(page.title)}</title>`)

    html = remplaceMeta(html, 'name="description"', page.description)
    html = remplaceMeta(html, 'property="og:title"', page.title)
    html = remplaceMeta(html, 'property="og:description"', page.description)
    html = remplaceMeta(html, 'property="og:url"', SITE_URL + page.path)
    html = remplaceMeta(html, 'property="og:type"', page.type)

    // une URL canonique par page, sinon les moteurs voient sept fois la racine
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${echappe(SITE_URL + page.path)}" />\n  </head>`,
    )

    const cible =
      page.path === '/'
        ? join(dist, 'index.html')
        : join(dist, page.path, 'index.html')

    await mkdir(dirname(cible), { recursive: true })
    await writeFile(cible, html, 'utf-8')
    console.log(`  ${String(corps.length).padStart(7)} o de contenu  ${page.path}`)
  }

  console.log(`\n${pages.length} pages prérendues.`)
}

main().catch(err => {
  console.error('\nEchec du prerendu :', err)
  process.exit(1)
})
