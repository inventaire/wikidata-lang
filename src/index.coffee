lang = require './lang.json'

byWdId = {}

for k, v of lang
  { wd } = v
  byWdId[wd] = v

module.exports =
  byCode: lang
  byWdId: byWdId
