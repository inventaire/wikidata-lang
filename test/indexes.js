require('should')

const byWdId = require('../indexes/by_wd_id')
const byWmCode = require('../indexes/by_wm_code')

describe('indexes', () => {
  it('should match', () => {
    for (const code in byWmCode) {
      for (const langData of byWmCode[code]) {
        langData.should.equal(byWdId[langData.wd])
      }
    }
  })

  it('should return the same object from both indexes', () => {
    const a = byWmCode.uk[0]
    const b = byWdId.Q8798
    a.should.equal(b)
  })
})
