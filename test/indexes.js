require('should')

const index = require('../lib/index')

describe('indexes', () => {
  it('should match', () => {
    for (const code in index.byCode) {
      for (const langData of index.byCode[code]) {
        langData.should.equal(index.byWdId[langData.wd])
      }
    }
  })

  it('should return the same object from both indexes', () => {
    const a = index.byCode.uk[0]
    const b = index.byWdId.Q8798
    a.should.equal(b)
  })
})
