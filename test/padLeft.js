const padLeft = require('../lib').helpers.padLeft;
const assert = require('assert');

describe('padLeft', function () {
  it('should padLeft text', function () {
    assert.equal(padLeft('abc', 6), '   abc');
    assert.equal(padLeft('abc', 6, '_-'), '_-_abc');
    assert.equal(padLeft('abc', 3), 'abc');
  });
});
