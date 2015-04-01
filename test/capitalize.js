const capitalize = require('../index').helpers.capitalize;
const assert = require('assert');

describe('capitalize', function () {
  it('should capitalize text', function () {
    assert.equal(capitalize('fred'), 'Fred');
    assert.equal(capitalize('fred flintstone'), 'Fred flintstone');
  });
});
