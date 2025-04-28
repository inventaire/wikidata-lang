# CHANGELOG
*versions follow [SemVer](http://semver.org)*

## 5.0.0 - 2025-04-28
### BREAKING CHANGES
* Convert module to [ESM](https://nodejs.org/api/esm.html)

## 4.1.0 - 2021-05-21
* Added `mappings/x_by_x.multiple_values.json` files

## 4.0.0 - 2021-05-21
### BREAKING CHANGES
* Files moved:
  * `wikidata-lang/by_any_code` => `wikidata-lang/indexes/by_any_code`
  * `wikidata-lang/by_iso_639_1_code` => `wikidata-lang/indexes/by_iso_639_1_code`
  * `wikidata-lang/by_iso_639_2_code` => `wikidata-lang/indexes/by_iso_639_2_code`
  * `wikidata-lang/by_iso_639_3_code` => `wikidata-lang/indexes/by_iso_639_3_code`
  * `wikidata-lang/by_iso_639_6_code` => `wikidata-lang/indexes/by_iso_639_6_code`
  * `wikidata-lang/by_wd_id` => `wikidata-lang/indexes/by_wd_id`
  * `wikidata-lang/by_wm_code` => `wikidata-lang/indexes/by_wm_code`
* Files renamed and moved:
  * `wikidata-lang/wd_id_by_iso_639_1_code` => `wikidata-lang/maps/wd_id_by_iso_639_1_code.json`
  * `wikidata-lang/wd_id_by_iso_639_2_code` => `wikidata-lang/maps/wd_id_by_iso_639_2_code.json`
  * `wikidata-lang/wd_id_by_iso_639_3_code` => `wikidata-lang/maps/wd_id_by_iso_639_3_code.json`
  * `wikidata-lang/wd_id_by_iso_639_6_code` => `wikidata-lang/maps/wd_id_by_iso_639_6_code.json`
  * `wikidata-lang/wd_id_by_wm_code` => `wikidata-lang/maps/wd_id_by_wm_code.json`
  * `wikidata-lang/wm_code_by_iso_639_1_code` => `wikidata-lang/maps/wm_code_by_iso_639_1_code.json`
  * `wikidata-lang/wm_code_by_iso_639_2_code` => `wikidata-lang/maps/wm_code_by_iso_639_2_code.json`
  * `wikidata-lang/wm_code_by_iso_639_3_code` => `wikidata-lang/maps/wm_code_by_iso_639_3_code.json`
  * `wikidata-lang/wm_code_by_iso_639_6_code` => `wikidata-lang/maps/wm_code_by_iso_639_6_code.json`
  * `wikidata-lang/wm_code_by_wd_id` => `wikidata-lang/maps/wm_code_by_wd_id.json`

## 3.0.0 - 2021-05-21
### BREAKING CHANGES
* the module interface was reorganized:
```js
// The object formerly on `require('wikidata-lang').byWdId` is now the default export
const languagesByWdId = require('wikidata-lang')
// The former `require('wikidata-lang').byCode` is now called by_wm_code
// and returns arrays of languages
const languagesByCode = require('wikidata-lang/by_wm_code')
```
### New features
* Many languages added: from 183 to 8177
* New codes are made available: ISO 639-1, ISO 639-2, ISO 639-3, ISO 639-6
