import {kebabCase} from './../lib/helpers';
import {expect} from 'chai';

describe('kebabCase', function () {
  it('should kebabCase text', function () {
    expect(kebabCase('Foo Bar')).to.equal('foo-bar');
    expect(kebabCase('fooBar')).to.equal('foo-bar');
    expect(kebabCase('--foo-bar')).to.equal('foo-bar');
    expect(kebabCase('__foo_bar__')).to.equal('foo-bar');
  });
});
