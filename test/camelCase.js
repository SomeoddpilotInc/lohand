const camelCase = require('../lib').helpers.camelCase;
const assert = require('assert');

describe('camelCase', function () {
  it('should camelCase text', function () {
    assert.equal(camelCase('Foo Bar'), 'fooBar');
    assert.equal(camelCase('--foo-bar'), 'fooBar');
    assert.equal(camelCase('__foo_bar__'), 'fooBar');
  });
});
