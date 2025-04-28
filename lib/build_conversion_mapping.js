import { languages } from '../data/languages.js'
import { sortObjectByKey } from './sort_object_by_key.js'

export function buildConversionMapping ({ keyCodeName, valueCodeName }) {
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
        addToIndex({ index: mapping, keyCodes, value: valueCode, singleKeyCode })
      } else {
        addToIndex({ index: multipleValues, keyCodes, value: valueCodes, singleKeyCode })
      }
    }
  }

  return {
    mapping: sortObjectByKey(mapping),
    multipleValues: sortObjectByKey(multipleValues),
  }
}

function addToIndex ({ index, keyCodes, value, singleKeyCode }) {
  if (singleKeyCode) {
    index[keyCodes] = value
  } else {
    for (const keyCode of keyCodes) {
      index[keyCode] = value
    }
  }
}
