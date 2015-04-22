import {kebabCase} from './../lib/helpers';
const assert = require('assert');

describe('kebabCase', function () {
  it('should kebabCase text', function () {
    assert.equal(kebabCase('Foo Bar'), 'foo-bar');
    assert.equal(kebabCase('fooBar'), 'foo-bar');
    assert.equal(kebabCase('--foo-bar'), 'foo-bar');
    assert.equal(kebabCase('__foo_bar__'), 'foo-bar');
  });
});
