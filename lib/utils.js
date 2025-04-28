import { createRequire } from 'node:module'

// Importing JSON will be stable after Node v23.1.0 https://nodejs.org/api/esm.html#json-modules
// thus the need for this alternative
export const requireJson = createRequire(import.meta.url)
