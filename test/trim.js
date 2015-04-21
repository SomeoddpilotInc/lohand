const trim = require('../lib').helpers.trim;
const assert = require('assert');

describe('trim', function () {
  it('should trim text', function () {
    assert.equal(trim('   abc   '), 'abc');
    assert.equal(trim('-_-abc-_-', '_-'), 'abc');
    assert.equal(trim('-_-abc-_-'), '-_-abc-_-');
  });
});
