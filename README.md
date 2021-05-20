# wikidata-lang

A database of languages indexed by their [wikidata](https://wikidata.org) id, Wikimedia language code, ISO 639-1 code, ISO 639-2 code, ISO 639-3 code, ISO 639-6 code

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
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Install

From a terminal, in your project directory, run:
```sh
npm install wikidata-lang
```

## How-To
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

## License
MIT
