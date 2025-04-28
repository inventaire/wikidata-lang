#!/usr/bin/env node
import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

const requireJson = createRequire(import.meta.url)

const results = requireJson('./languages_data_query_results.json')

const byWdId = {}

function add (result, langData, codeName) {
  const codeValue = result[codeName]
  if (codeValue) {
    langData[codeName] = langData[codeName] || []
    if (!langData[codeName].includes(codeValue)) langData[codeName].push(codeValue)
  }
}

for (const result of results) {
  const { wd, native, label } = result
  const langData = byWdId[wd] = byWdId[wd] || {}
  langData.wd = wd
  if (label) langData.label = label
  if (native) langData.native = native
  add(result, langData, 'wmCode')
  add(result, langData, 'iso6391')
  add(result, langData, 'iso6392')
  add(result, langData, 'iso6393')
  add(result, langData, 'iso6396')
}

// Use a consistent key ordering to better display changes
function reorderObjectKeys ({ wd, label, native, wmCode, iso6391, iso6392, iso6393, iso6396 }) {
  return {
    wd,
    label,
    native,
    wmCode: wmCode?.sort(),
    iso6391: iso6391?.sort(),
    iso6392: iso6392?.sort(),
    iso6393: iso6393?.sort(),
    iso6396: iso6396?.sort(),
  }
}

const getNumericId = id => parseInt(id.slice(1))

const languages = Object.values(byWdId)
  .map(reorderObjectKeys)
  .sort((a, b) => getNumericId(a.wd) - getNumericId(b.wd))

writeFile('./data/languages.json', JSON.stringify(languages, null, 2))
.then(() => console.log('rebuilt languages data'))
.catch(console.error)
