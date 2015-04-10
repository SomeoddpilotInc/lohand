const trimLeft = require('../index').helpers.trimLeft;
const assert = require('assert');

describe('trimLeft', function () {
  it('should trimLeft text', function () {
    assert.equal(trimLeft('   abc   '), 'abc   ');
    assert.equal(trimLeft('-_-abc-_-', '_-'), 'abc-_-');
    assert.equal(trimLeft('-_-abc-_-'), '-_-abc-_-');
  });
});
