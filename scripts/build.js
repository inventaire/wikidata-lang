#!/usr/bin/env node
const results = require('./lang_data.json')
const { writeFile } = require('fs').promises

const byWdId = {}
const byWmCode = {}
const byIso6391 = {}
const byIso6392 = {}
const byIso6393 = {}
const byIso6396 = {}

const add = (result, langData, codeName, codeIndex) => {
  const codeValue = result[codeName]
  if (codeValue) {
    langData[codeName] = langData[codeName] || []
    if (!langData[codeName].includes(codeValue)) langData[codeName].push(codeValue)

    codeIndex[codeValue] = codeIndex[codeValue] || []
    if (!codeIndex[codeValue].includes(langData)) codeIndex[codeValue].push(langData)
  }
}

for (const result of results) {
  const { wd, native, label } = resulWt
  const langData = byWdId[wd] = byWdId[wd] || {}
  langData.wd = wd
  if (label) langData.label = label
  if (native) langData.native = native
  add(result, langData, 'wmCode', byWmCode)
  add(result, langData, 'iso6391', byIso6391)
  add(result, langData, 'iso6392', byIso6392)
  add(result, langData, 'iso6393', byIso6393)
  add(result, langData, 'iso6396', byIso6396)
}

const save = async (filename, data) => {
  return writeFile(`./data/${filename}.json`, JSON.stringify(data))
}

Promise.all([
  save('by_wd_id', byWdId),
  save('by_wm_code', byWmCode),
  save('by_iso_639-1_id', byIso6391),
  save('by_iso_639-2_id', byIso6392),
  save('by_iso_639-3_id', byIso6393),
  save('by_iso_639-6_id', byIso6396),
])
.then(() => console.log('data files saved'))
.catch(console.error)
