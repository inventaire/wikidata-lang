import { createRequire } from 'node:module'

const requireJson = createRequire(import.meta.url)
export const languages = requireJson('./languages.json')
