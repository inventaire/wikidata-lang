wikidata-lang
====

An index of 183 languages accessible either by their 2-letters language code or Wikidata Qid.

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

## Nota Bene
2-letters language codes are Wikimedia language codes, which fits mostly [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), out of some exceptions. ex: (Moldovan)[https://wikidata.org/entity/Q36392]

## Licence
MIT
