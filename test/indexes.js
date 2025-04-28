import 'should'
import byWdId from '../indexes/by_wd_id.js'
import byWmCode from '../indexes/by_wm_code.js'

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
