import {trimRight} from './../lib/helpers';
import {expect} from 'chai';

describe('trimRight', function () {
  it('should trimRight text', function () {
    expect(trimRight('   abc   ')).to.equal('   abc');
    expect(trimRight('-_-abc-_-', '_-')).to.equal('-_-abc');
    expect(trimRight('-_-abc-_-')).to.equal('-_-abc-_-');
  });
});
