const languages = require('../data/languages.json')
const addToIndex = require('../lib/add_to_index')

const index = {}

for (const langData of languages) {
  addToIndex(index, langData, 'wmCode')
  addToIndex(index, langData, 'iso6391')
  addToIndex(index, langData, 'iso6392')
  addToIndex(index, langData, 'iso6393')
  addToIndex(index, langData, 'iso6396')
}

module.exports = index
