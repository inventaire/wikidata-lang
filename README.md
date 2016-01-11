wikidata-lang
====

An index of 183 languages accessible either by their 2-letters language code or Wikidata Qid.

For each language, it returns an object that looks like this:
```json
{
  "code": "uk",
  "label": "Ukrainian",
  "native": "Українська",
  "wd": "Q8798"
}
```
where `wd` stands for [wikidata](https://wikidata.org) and Q8798 for [wikidata.org/entity/Q8798](https://wikidata.org/entity/Q8798)


## Install

### via npm
in your terminal
```sh
npm install wikidata-lang --save
```
in your JS code
```javascript
var wdLang = require('wikidata-lang')
```

### classic browser import
include [`/dist/index.js`](https://raw.githubusercontent.com/inventaire/wikidata-lang/master/dist/index.js) in your code, then the lib will be accessible from `window.wdLang`

## How-To
the index can be accessed in two ways:

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

## But why?!?
When you deal with Wikidata entities from different countries (such as books or authors in the case of [inventaire](http://github.com/inventaire/inventaire)), you often find entities for which there is no label in the initialy desired language. To decide which language to use as fallback, you may wish to use the entities original language properties:
```
P103: native language (for humans/authors)
P364: original language of work (for books)
```
Those properties use entities as values, and that's where this lib becomes useful: you want to answer the question **what is the 2 letters language code associated with this original language** `Qxxx` **?**

(ex: [Q188](https://wikidata.org/entity/Q188), [Q1321](https://wikidata.org/entity/Q1321), etc.).
```javascript
var myLangCode = 'fr'
var originalLang = 'Q1321'
var originalLangCode = wdLang.byWdId[originalLang]
var label = entity.labels[myLangCode] || entity.labels[originalLangCode] || entity.labels['en']
```

## Nota Bene
2-letters language codes are Wikimedia language codes, which fits mostly [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (out of some exceptions?)

## Licence
MIT
