const languages = require('../data/languages.json')
const add = require('./add')

const index = {}

for (const langData of languages) {
  add(index, langData, 'iso6392')
}

module.exports = index
