import { languages } from '../data/languages.js'

const byWdId = {}

for (const langData of languages) {
  byWdId[langData.wd] = langData
}

export default byWdId
