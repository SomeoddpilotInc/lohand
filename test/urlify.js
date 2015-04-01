const urlify = require('../index').helpers.urlify;
const assert = require('assert');

describe('urlify', function () {
  it('should urlify text', function () {
    assert.equal(urlify('Foo Bar'), 'foo-bar');
    assert.equal(urlify('--foo-bar'), '--foo-bar');
    assert.equal(urlify('__foo_bar__'), 'foobar');
  });
});
