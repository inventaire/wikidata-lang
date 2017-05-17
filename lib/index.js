const lang = require('./lang.json')

const byWdId = {}

for (let key in lang) {
  let value = lang[key]
  let { wd } = value
  byWdId[wd] = value
}

module.exports = {
  byCode: lang,
  byWdId
}
