var lang = require('./lang.json')
var byWdId = {}

Object.keys(lang).forEach(function (key) {
  var value = lang[key]
  var wd = value.wd
  byWdId[wd] = value
})

module.exports = {
  byCode: lang,
  byWdId: byWdId
}
