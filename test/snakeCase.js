import {snakeCase} from './../lib/helpers';
import {expect} from 'chai';

/**
 * Snekcase
 */
describe('snakeCase', function () {
  it('should snakeCase text', function () {
    expect(snakeCase('Foo Bar')).to.equal('foo_bar');
    expect(snakeCase('fooBar')).to.equal('foo_bar');
    expect(snakeCase('--foo-bar')).to.equal('foo_bar');
    expect(snakeCase('__foo_bar__')).to.equal('foo_bar');
  });
});
