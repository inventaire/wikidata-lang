const byWdId = require('../data/by_wd_id.json')
const byCode = {}

const add = (codes, langData) => {
  if (!codes) return
  for (const code of codes) {
    if (byCode[code] == null) {
      byCode[code] = [ langData ]
    } else if (!byCode[code].includes(langData)){
      byCode[code].push(langData)
    }
  }
}

for (const langData of Object.values(byWdId)) {
  const { wmCode, iso6391, iso6392, iso6393, iso6396 } = langData
  add(wmCode, langData)
  add(iso6391, langData)
  add(iso6392, langData)
  add(iso6393, langData)
  add(iso6396, langData)
}

module.exports = {
  byCode,
  byWdId,
}
