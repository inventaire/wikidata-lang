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

# Summary
- [Install](#install)
  - [via NPM](#via-npm)
  - [classic browser import](#classic-browser-import)
- [How-to](#how-to)
- [But why?!?](#but-why)
- [Example: use in inventaire](#example-use-in-inventaire)
- [NB](#nb)
- [License](#license)

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
Those properties use entities as values, and that's where this lib becomes useful: you want to answer the question **what is the 2 letters language code associated with this original language** `Qxxx` **?** (ex: [Q188](https://wikidata.org/entity/Q188), [Q1321](https://wikidata.org/entity/Q1321), etc.) without having to do extra requests.

```javascript
var myLangCode = 'fr'
var originalLang = 'Q1321'
var originalLangCode = wdLang.byWdId[originalLang]
var label = entity.labels[myLangCode] || entity.labels[originalLangCode] || entity.labels['en']
```

## Example: use in inventaire
Let's request an entity that miss labels in English and French, and request it as a French speaking user:

* Go to https://inventaire.io/entity/wd:Q1128109/Constanze_Kurz?lang=fr
* The author's and books' labels missing in English and French should fallback to German, the author native language (P103) and the books original language (P364)

[see the code](https://github.com/inventaire/inventaire-client/blob/dev/app/modules/entities/models/wikidata_entity.coffee#L71)

## NB
2-letters language codes are [Wikimedia language codes](https://www.wikidata.org/wiki/Property:P424), which fits mostly [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (out of some exceptions?)

## License
MIT
