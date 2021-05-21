# wikidata-lang

A database of languages and their [wikidata](https://wikidata.org) id, Wikimedia language code, ISO 639-1, ISO 639-2, ISO 639-3, and ISO 639-6 codes.
A database of languages and their [Wikidata](https://www.wikidata.org) id, [Wikimedia language code](https://www.wikidata.org/wiki/Property:P424), [ISO 639-1](https://www.wikidata.org/wiki/Property:P218), [ISO 639-2](https://www.wikidata.org/wiki/Property:P219), [ISO 639-3](https://www.wikidata.org/wiki/Property:P220), [ISO 639-6](https://www.wikidata.org/wiki/Property:P211) codes

This database is based on the result of a [SPARQL query executed on query.wikidata.org](https://github.com/inventaire/wikidata-lang/blob/master/scripts/languages_data.rq), so the data is as good as Wikidata is: in case of an error, please update Wikidata and request an update of this database in the [issues](https://github.com/inventaire/wikidata-lang/issues).

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
const languagesByIso6391Code = require('wikidata-lang/indexes/by_iso_639_1_code')
const languagesByIso6392Code = require('wikidata-lang/indexes/by_iso_639_2_code')
const languagesByIso6393Code = require('wikidata-lang/indexes/by_iso_639_3_code')
const languagesByIso6396Code = require('wikidata-lang/indexes/by_iso_639_6_code')
const languagesByWmCode = require('wikidata-lang/indexes/by_wm_code')
// Note that you can also use an index regrouping all of the above
const languagesByAnyCode = require('wikidata-lang/indexes/by_any_code')

// The Wikidata id index returns single language data objects
languagesByWdId.Q8798
// => { "code": "uk", "label": "Ukrainian", "native": "Українська", "wd": "Q8798" }

// while indexes by code always return arrays of language data objects
// to account for edge cases where several Wikidata languages items share a common code.
languagesByIso6391Code.uk[0]
// => { "code": "uk", "label": "Ukrainian", "native": "Українська", "wd": "Q8798" }
```

### Convert between codes
Conversion mappings can be build from the language data objects described above, but you can also use the pre-built ones:
```js
const wdIdByWmCode = require('wikidata-lang/mappings/wd_id_by_wm_code.json')
wdIdByWmCode['zh-min-nan'] // => 'Q36495'

const wdIdByIso6391Code = require('wikidata-lang/mappings/wd_id_by_iso_639_1_code.json')
wdIdByIso6391Code['cr'] // => 'Q33390'

const wdIdByIso6392Code = require('wikidata-lang/mappings/wd_id_by_iso_639_2_code.json')
wdIdByIso6392Code['kzu'] // => 'Q6380723'

const wdIdByIso6393Code = require('wikidata-lang/mappings/wd_id_by_iso_639_3_code.json')
wdIdByIso6393Code['acc'] // => 'Q16110361'

const wdIdByIso6396Code = require('wikidata-lang/mappings/wd_id_by_iso_639_6_code.json')
wdIdByIso6396Code['jah'] // => 'Q2742661'

const wmCodeByWdId = require('wikidata-lang/mappings/wm_code_by_wd_id.json')
wmCodeByWdId['Q32762'] // => 'fiu-vro'

// This one seems useless, as ISO 639-1 seem to always be equivalent to their corresponding Wikimedia language code
const wmCodeByIso6391Code = require('wikidata-lang/mappings/wm_code_by_iso_639_1_code.json')
wmCodeByIso6391Code['id'] // => 'id'

const wmCodeByIso6392Code = require('wikidata-lang/mappings/wm_code_by_iso_639_2_code.json')
wmCodeByIso6391Code['zza'] // => 'diq'

const wmCodeByIso6393Code = require('wikidata-lang/mappings/wm_code_by_iso_639_3_code.json')
wmCodeByIso6391Code['yue'] // => 'zh-yue'

const wmCodeByIso6396Code = require('wikidata-lang/mappings/wm_code_by_iso_639_6_code.json')
wmCodeByIso6391Code['yyef'] // => 'zh-yue'

// etc.
```
See the [`mappings` folder](https://github.com/inventaire/wikidata-lang/tree/master/mappings) for a full list of available mappings.

**NB**: When several values are available for a given key, no value is added to the mapping for that key. It is added instead to the `mappings/x_by_x.multiple_values.json` file.
For instance, in ISO 639-2, both `ell` and `gre` are mapped to `el` in ISO 639-1 (also true for Wikimedia language codes)

## Examples
See [how we use it in Inventaire](https://github.com/inventaire/inventaire/search?q=wikidata-lang&type=code)

## License
MIT
