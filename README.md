# wikidata-lang

A database of languages indexed by their [wikidata](https://wikidata.org) id, Wikimedia language code, ISO 639-1 code, ISO 639-2 code, ISO 639-3 code, ISO 639-6 code. This database is based on the result of a [SPARQL query executed on query.wikidata.org](https://github.com/inventaire/wikidata-lang/blob/master/scripts/languages_data.rq), so the data is as good as Wikidata is: in case of an error, please update Wikidata and request an update of this database in the [issues](https://github.com/inventaire/wikidata-lang/issues).

For each language, the data object looks like this:
```js
{
  wd: 'Q8798', // https://wikidata.org/entity/Q8798
  label: 'Ukrainian', // English label
  native: 'українська мова', // P1705
  wmCode: [ 'uk' ], // P424
  iso6391: [ 'uk' ], // P218
  iso6392: [ 'ukr' ], // P219
  iso6393: [ 'ukr' ] // P220
  // iso6396 value (P221) missing for Q8798
}
```

## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [How-To](#how-to)
  - [Access full language data objects](#access-full-language-data-objects)
  - [Convert between codes](#convert-between-codes)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Install

From a terminal, in your project directory, run:
```sh
npm install wikidata-lang
```

## How-To

### Access full language data objects
In your JS code:
```js
// languages indexed by Wikidata id is the default
const languagesByWdId = require('wikidata-lang')

// For indexes by other available codes, require the desired module:
const languagesByIso6391Code = require('wikidata-lang/by_iso_639_1_code')
const languagesByIso6392Code = require('wikidata-lang/by_iso_639_2_code')
const languagesByIso6393Code = require('wikidata-lang/by_iso_639_3_code')
const languagesByIso6396Code = require('wikidata-lang/by_iso_639_6_code')
const languagesByWmCode = require('wikidata-lang/by_wm_code')
// Note that you can also use an index regrouping all of the above
const languagesByCode = require('wikidata-lang/by_code')

// The Wikidata id index returns single language data objects
languagesByWdId.Q8798
// => { "code": "uk", "label": "Ukrainian", "native": "Українська", "wd": "Q8798" }

// while indexes by code always return arrays of language data objects
// to account for edge cases where several Wikidata languages items share a common code.
languagesByIso6391Code.uk[0]
// => { "code": "uk", "label": "Ukrainian", "native": "Українська", "wd": "Q8798" }
```

### Convert between codes
Conversion tables can be build from the language data objects described above, but you can also use the pre-built ones available:
```js
const wdIdByWmCode = require('wikidata-lang/wd_id_by_wm_code')
wdIdByWmCode['zh-min-nan'] // => 'Q36495'

const wdIdByIso6391Code = require('wikidata-lang/wd_id_by_iso_639_1_code')
wdIdByIso6391Code['cr'] // => 'Q33390'

const wdIdByIso6392Code = require('wikidata-lang/wd_id_by_iso_639_2_code')
wdIdByIso6392Code['kzu'] // => 'Q6380723'

const wdIdByIso6393Code = require('wikidata-lang/wd_id_by_iso_639_3_code')
wdIdByIso6393Code['acc'] // => 'Q16110361'

const wdIdByIso6396Code = require('wikidata-lang/wd_id_by_iso_639_6_code')
wdIdByIso6396Code['jah'] // => 'Q2742661'

const wmCodeByWdId = require('wikidata-lang/wm_code_by_wd_id')
wmCodeByWdId['Q32762'] // => 'fiu-vro'

// This one seems useless, as ISO 639-1 seem to always be equivalent to their corresponding Wikimedia language code
const wmCodeByIso6391Code = require('wikidata-lang/wm_code_by_iso_639_1_code')
wmCodeByIso6391Code['id'] // => 'id'

const wmCodeByIso6392Code = require('wikidata-lang/wm_code_by_iso_639_2_code')
wmCodeByIso6391Code['zza'] // => 'diq'

const wmCodeByIso6393Code = require('wikidata-lang/wm_code_by_iso_639_3_code')
wmCodeByIso6391Code['yue'] // => 'zh-yue'

const wmCodeByIso6396Code = require('wikidata-lang/wm_code_by_iso_639_6_code')
wmCodeByIso6391Code['yyef'] // => 'zh-yue'
```

**NB**: When several values are available for a given key, no value is added to the conversion table for that key.

If you need a conversion table that isn't there, you can either request it in the [issues](https://github.com/inventaire/wikidata-lang/issues) or build it yourself:
```js
const iso6392CodeByIso6393Code  = require('./lib/build_conversion_map')({
  // Possible codes: wd, wmCode, iso6391, iso6392, iso6393, iso6396
  keyCodeName: 'iso6393',
  valueCodeName: 'iso6392',
})
```

## License
MIT
