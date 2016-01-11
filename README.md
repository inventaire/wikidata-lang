wikidata-lang
====

An index of 183 languages accessible either by their 2-letters languages code (ISO 639-1 code) or Wikidata Qid.
For each language, it returns an object that looks like this:
```json
  "uk": {
    "code": "uk",
    "label": "Ukrainian",
    "native": "Українська",
    "wd": "Q8798"
  }
```
where `wd` stands for [wikidata](https://wikidata.org) and Q8798 for [wikidata.org/entity/Q8798](https://wikidata.org/entity/Q8798)


## How-To
first, require the lib
```javascript
var wdLang = require('wikidata-lang');
```

then, the index can be accessed in two ways:

- by language code
```javascript
wdLang.byCode.uk
// => { "code": "uk", "label": "Ukrainian", "native": "Українська", "wd": "Q8798" }
```

- by wikidata id
```javascript
wdLang.byWdId.Q8798
// => { "code": "uk", "label": "Ukrainian", "native": "Українська", "wd": "Q8798" }
```
