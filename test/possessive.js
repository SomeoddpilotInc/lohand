import {possessive} from './../lib/helpers';
const assert = require('assert');

describe('possessive', function () {
  it('should possessive text', function () {
    assert.equal(possessive('Foo Bar'), 'Foo Bar’s');
    assert.equal(possessive('Sisters'), 'Sisters’');
  });
});
