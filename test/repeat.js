import {repeat} from './../lib/helpers';
import {expect} from 'chai';

describe('repeat', function () {
  it('should repeat text', function () {
    expect(repeat('*', 3)).to.equal('***');
    expect(repeat('abc', 2)).to.equal('abcabc');
    expect(repeat('abc', 0)).to.equal('');
  });
});
