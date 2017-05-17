require('should')

const index = require('../lib/index')

describe('indexes', () => {
  it('should match', (done) => {
    for (let key in index.byCode) {
      value = index.byCode[key]
      value.should.equal(index.byWdId[value.wd])
    }

    const a = Object.keys(index.byCode)
    const b = Object.keys(index.byWdId)
    a.length.should.equal(b.length)
    done()
  })

  it('should return the same object from both indexes', (done) => {
    const a = index.byCode.uk
    const b = index.byWdId.Q8798
    a.should.equal(b)
    done()
  })
})
