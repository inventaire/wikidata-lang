import { languages } from '../data/languages.js'
import { addToIndex } from '../lib/add_to_index.js'

const index = {}

for (const langData of languages) {
  addToIndex(index, langData, 'iso6393')
}

export default index
