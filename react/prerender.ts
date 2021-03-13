import fs from 'fs'
import { resolve } from 'path'
import { render } from './dist/server/entry-server'

const toAbsolute = (path: string): string => resolve(__dirname, path)
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')

const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.(jsx|tsx)$/, '').toLowerCase()
    return name === 'index' ? '/' : `/${name}`
  })

;(async () => {
  // pre-render each route...
  routesToPrerender.forEach(async (url) => {
    const appHtml = await render(url, {})
    const html = template.replace(`<!--app-html-->`, appHtml)
    const filePath = `dist/static${url === '/' ? '/index' : url}.html`

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  })
})()
