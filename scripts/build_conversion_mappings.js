#!/usr/bin/env node
const { writeFile } = require('fs').promises
const buildConversionMapping = require('../lib/build_conversion_mapping')

const codesFilenames = {
  wd: 'wd_id',
  wmCode: 'wm_code',
  iso6391: 'iso_639_1_code',
  iso6392: 'iso_639_2_code',
  iso6393: 'iso_639_3_code',
  iso6396: 'iso_639_6_code',
}

const codesNames = Object.keys(codesFilenames)

const buildAndSaveCodeConversionMappings = keyCodeName => {
  return Promise.all(codesNames.map(buildAndSaveCodeConversionMapping(keyCodeName)))
}

const buildAndSaveCodeConversionMapping = keyCodeName => valueCodeName => {
  if (keyCodeName === valueCodeName) return
  const { mapping, multipleValues } = buildConversionMapping({ keyCodeName, valueCodeName })
  const base = `${codesFilenames[valueCodeName]}_by_${codesFilenames[keyCodeName]}`
  return Promise.all([
    writeFile(`./mappings/${base}.json`, JSON.stringify(mapping, null, 2)),
    writeFile(`./mappings/${base}.multiple_values.json`, JSON.stringify(multipleValues, null, 2)),
  ])
}

Promise.all(codesNames.map(buildAndSaveCodeConversionMappings))
.then(() => console.log('rebuilt conversion mappings'))
.catch(console.error)
