const endsWith = require('../index').helpers.endsWith;
const assert = require('assert');

describe('endsWith', function () {
  it('should endsWith text', function () {
    assert.equal(endsWith('abc', 'c'), true);
    assert.equal(endsWith('abc', 'b'), false);
    assert.equal(endsWith('abc', 'b', 2), true);
  });
});
