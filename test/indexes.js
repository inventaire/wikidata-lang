require('should')

const byWdId = require('../lib/by_wd_id')
const byCode = require('../lib/by_code')

describe('indexes', () => {
  it('should match', () => {
    for (const code in byCode) {
      for (const langData of byCode[code]) {
        langData.should.equal(byWdId[langData.wd])
      }
    }
  })

  it('should return the same object from both indexes', () => {
    const a = byCode.uk[0]
    const b = byWdId.Q8798
    a.should.equal(b)
  })
})
