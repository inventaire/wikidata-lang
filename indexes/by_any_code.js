import { languages } from '../data/languages.js'
import { addToIndex } from '../lib/add_to_index.js'

const index = {}

for (const langData of languages) {
  addToIndex(index, langData, 'wmCode')
  addToIndex(index, langData, 'iso6391')
  addToIndex(index, langData, 'iso6392')
  addToIndex(index, langData, 'iso6393')
  addToIndex(index, langData, 'iso6396')
}

export default index
