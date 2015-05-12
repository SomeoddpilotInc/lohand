import {startCase} from './../lib/helpers';
import {expect} from 'chai';

describe('startCase', function () {
  it('should startCase text', function () {
    expect(startCase('Foo Bar')).to.equal('Foo Bar');
    expect(startCase('--foo-bar')).to.equal('Foo Bar');
    expect(startCase('__foo_bar__')).to.equal('Foo Bar');
  });
});
