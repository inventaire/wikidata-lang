# CHANGELOG
*versions follow [SemVer](http://semver.org)*

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
