const deburr = require('../lib').helpers.deburr;
const assert = require('assert');

describe('deburr', function () {
  it('should deburr text', function () {
    assert.equal(deburr('déjà vu'), 'deja vu');
  });
});
