const pad = require('../lib').helpers.pad;
const assert = require('assert');

describe('pad', function () {
  it('should pad text', function () {
    assert.equal(pad('abc', 8), '  abc   ');
    assert.equal(pad('abc', 8, '_-'), '_-abc_-_');
    assert.equal(pad('abc', 3), 'abc');
  });
});
