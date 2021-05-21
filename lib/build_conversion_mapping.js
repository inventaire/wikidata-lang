const languages = require('../data/languages.json')
const sortObjectByKey = require('./sort_object_by_key')

module.exports = ({ keyCodeName, valueCodeName }) => {
  const mapping = {}
  const singleValueCode = valueCodeName === 'wd'
  const singleKeyCode = keyCodeName === 'wd'

  for (const langData of languages) {
    const keyCodes = langData[keyCodeName]
    const valueCodes = langData[valueCodeName]

    // Ignore cases where several values are possible
    if (valueCodes && (singleValueCode || valueCodes.length === 1) && keyCodes) {
      const valueCode = singleValueCode ? valueCodes : valueCodes[0]
      if (singleKeyCode) {
        mapping[keyCodes] = valueCode
      } else {
        for (const keyCode of keyCodes) {
          mapping[keyCode] = valueCode
        }
      }
    }
  }

  // Sorting by key to make the output easier to debug
  return sortObjectByKey(mapping)
}
