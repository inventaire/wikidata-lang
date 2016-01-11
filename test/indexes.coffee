should = require 'should'

index = require '../src/index.coffee'

_ = require 'lodash'

describe 'indexes', ->
  it 'should match', (done)->
    for k, v of index.byCode
      v.should.equal index.byWdId[v.wd]

    a = Object.keys index.byCode
    b = Object.keys index.byWdId
    a.length.should.equal b.length

    done()

  it 'should return the same object from both indexes', (done)->
    a = index.byCode.uk
    b = index.byWdId.Q8798
    a.should.equal b
    done()
