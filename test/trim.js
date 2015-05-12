import {trim} from './../lib/helpers';
import {expect} from 'chai';

describe('trim', function () {
  it('should trim text', function () {
    expect(trim('   abc   ')).to.equal('abc');
    expect(trim('-_-abc-_-', '_-')).to.equal('abc');
    expect(trim('-_-abc-_-')).to.equal('-_-abc-_-');
  });
});
