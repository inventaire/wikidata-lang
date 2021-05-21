const languages = require('../data/languages.json')
const sortObjectByKey = require('./sort_object_by_key')

module.exports = ({ keyCodeName, valueCodeName }) => {
  const mapping = {}
  const multipleValues = {}
  const singleValueCode = valueCodeName === 'wd'
  const singleKeyCode = keyCodeName === 'wd'

  for (const langData of languages) {
    const keyCodes = langData[keyCodeName]
    const valueCodes = langData[valueCodeName]

    if (valueCodes && keyCodes) {
      // Let aside cases where several values are possible
      if (singleValueCode || valueCodes.length === 1) {
        const valueCode = singleValueCode ? valueCodes : valueCodes[0]
        addToIndex({ index: mapping, keyCodes, value: valueCode, singleKeyCode, singleValueCode })
      } else {
        addToIndex({ index: multipleValues, keyCodes, value: valueCodes, singleKeyCode, singleValueCode })
      }
    }
  }

  return {
    mapping: sortObjectByKey(mapping),
    multipleValues: sortObjectByKey(multipleValues),
  }
}

const addToIndex = ({ index, keyCodes, value, singleKeyCode, singleValueCode }) => {
  if (singleKeyCode) {
    index[keyCodes] = value
  } else {
    for (const keyCode of keyCodes) {
      index[keyCode] = value
    }
  }
}
