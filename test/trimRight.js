const trimRight = require('../lib').helpers.trimRight;
const assert = require('assert');

describe('trimRight', function () {
  it('should trimRight text', function () {
    assert.equal(trimRight('   abc   '), '   abc');
    assert.equal(trimRight('-_-abc-_-', '_-'), '-_-abc');
    assert.equal(trimRight('-_-abc-_-'), '-_-abc-_-');
  });
});
