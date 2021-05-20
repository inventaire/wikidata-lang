const languages = require('../data/languages.json')
const add = require('./add')

const index = {}

for (const langData of languages) {
  add(index, langData, 'iso6393')
}

module.exports = index
