import {snakeCase} from './../lib/helpers';
const assert = require('assert');

describe('snakeCase', function () {
  it('should snakeCase text', function () {
    assert.equal(snakeCase('Foo Bar'), 'foo_bar');
    assert.equal(snakeCase('fooBar'), 'foo_bar');
    assert.equal(snakeCase('--foo-bar'), 'foo_bar');
    assert.equal(snakeCase('__foo_bar__'), 'foo_bar');
  });
});
