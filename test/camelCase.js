import {camelCase} from './../lib/helpers/lodash';
import {expect} from 'chai';

describe('camelCase', () => {
  it('should camelCase text', () => {
    expect(camelCase('Foo Bar'))
      .to.equal('fooBar');

    expect(camelCase('--foo-bar'))
      .to.equal('fooBar');

    expect(camelCase('__foo_bar__'))
      .to.equal('fooBar');
  });
});
