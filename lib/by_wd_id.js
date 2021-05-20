const languages = require('../data/languages.json')
const byWdId = {}

for (const langData of languages) {
  byWdId[langData.wd] = langData
}

module.exports = byWdId
