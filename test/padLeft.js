import {padLeft} from './../lib/helpers';
import {expect} from 'chai';

describe('padLeft', function () {
  it('should padLeft text', function () {
    expect(padLeft('abc', 6)).to.equal('   abc');
    expect(padLeft('abc', 6, '_-')).to.equal('_-_abc');
    expect(padLeft('abc', 3)).to.equal('abc');
  });
});
