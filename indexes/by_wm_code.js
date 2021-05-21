const languages = require('../data/languages.json')
const addToIndex = require('../lib/add_to_index')

const index = {}

for (const langData of languages) {
  addToIndex(index, langData, 'wmCode')
}

module.exports = index
