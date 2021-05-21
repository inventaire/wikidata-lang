const languages = require('./data/languages.json')
const add = require('./lib/add')

const index = {}

for (const langData of languages) {
  add(index, langData, 'wmCode')
  add(index, langData, 'iso6391')
  add(index, langData, 'iso6392')
  add(index, langData, 'iso6393')
  add(index, langData, 'iso6396')
}

module.exports = index
