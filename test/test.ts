require('source-map-support').install();
import {expect} from 'chai';
import {each} from '../source'

describe('promise-each2-test', function () {

  it('registration', function () {
    let items = ''
    return each([
      () => Promise.resolve().then(() => items += 'a'),
      () => Promise.resolve().then(() => items += 'b'),
      () => Promise.resolve().then(() => items += 'c'),
    ])
      .then(() => {
        expect(items).to.equal('abc')
      })
  })

})