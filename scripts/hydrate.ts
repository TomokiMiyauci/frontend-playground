import { copySync, copyFileSync } from 'fs-extra'
import { join, resolve } from 'path'
const directories = ['react', 'vue3']

const run = () => {
  directories.forEach((dir) => {
    copySync(join(dir, 'dist', 'static'), resolve(__dirname, '..', 'dist', dir))
  })

  copyFileSync(
    resolve(__dirname, '..', 'index.html'),
    resolve(__dirname, '..', 'dist', 'index.html')
  )
}

run()
