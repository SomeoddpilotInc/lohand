const unescape = require('../index').helpers.unescape;
const assert = require('assert');

describe('unescape', function () {
  it('should unescape text', function () {
    assert.equal(unescape('fred, barney, &amp; pebbles'), 'fred, barney, & pebbles');
  });
});
