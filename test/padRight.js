import {padRight} from './../lib/helpers';
import {expect} from 'chai';

describe('padRight', function () {
  it('should padRight text', function () {
    expect(padRight('abc', 6)).to.equal('abc   ');
    expect(padRight('abc', 6, '_-')).to.equal('abc_-_');
    expect(padRight('abc', 3)).to.equal('abc');
  });
});
