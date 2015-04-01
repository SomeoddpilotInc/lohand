const deburr = require('../index').helpers.deburr;
const assert = require('assert');

describe('deburr', function () {
  it('should deburr text', function () {
    assert.equal(deburr('déjà vu'), 'deja vu');
  });
});
