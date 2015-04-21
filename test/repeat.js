const repeat = require('../lib').helpers.repeat;
const assert = require('assert');

describe('repeat', function () {
  it('should repeat text', function () {
    assert.equal(repeat('*', 3), '***');
    assert.equal(repeat('abc', 2), 'abcabc');
    assert.equal(repeat('abc', 0), '');
  });
});
