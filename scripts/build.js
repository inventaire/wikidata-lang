#!/usr/bin/env node
const results = require('./languages_data_query_results.json')
const { writeFile } = require('fs').promises

const byWdId = {}

const add = (result, langData, codeName) => {
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

const languages = Object.values(byWdId)

writeFile('./data/languages.json', JSON.stringify(languages))
.then(() => console.log('languages data saved'))
.catch(console.error)
