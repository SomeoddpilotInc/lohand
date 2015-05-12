import {trimLeft} from './../lib/helpers';
import {expect} from 'chai';

describe('trimLeft', function () {
  it('should trimLeft text', function () {
    expect(trimLeft('   abc   ')).to.equal( 'abc   ');
    expect(trimLeft('-_-abc-_-', '_-')).to.equal( 'abc-_-');
    expect(trimLeft('-_-abc-_-')).to.equal( '-_-abc-_-');
  });
});
