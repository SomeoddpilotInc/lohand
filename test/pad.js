import {pad} from './../lib/helpers';
import {expect} from 'chai';

describe('pad', function () {
  it('should pad text', function () {
    expect(pad('abc', 8)).to.equal('  abc   ');
    expect(pad('abc', 8, '_-')).to.equal('_-abc_-_');
    expect(pad('abc', 3)).to.equal('abc');
  });
});
