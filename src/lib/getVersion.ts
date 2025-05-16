import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { readFileSync } from 'fs'

const getDevVersion = () => {
  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const path = join(__dirname, '../../package.json')
    return JSON.parse(readFileSync(path, 'utf-8')).version
  } catch {
    return 'dev'
  }
}

const BUILD_VERSION = process.env.BUILD_VERSION

export function getVersion(): string {
  return BUILD_VERSION ? BUILD_VERSION : getDevVersion()
}
