import {possessive} from './../lib/helpers';
import {expect} from 'chai';

describe('possessive', function () {
  it('should possessive text', function () {
    expect(possessive('Foo Bar')).to.equal('Foo Bar’s');
    expect(possessive('Sisters')).to.equal('Sisters’');
  });
});
