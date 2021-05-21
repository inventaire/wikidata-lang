const languages = require('./data/languages.json')
const add = require('./lib/add')

const index = {}

for (const langData of languages) {
  add(index, langData, 'iso6391')
}

module.exports = index
