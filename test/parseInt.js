import {parseInt as parseInteger} from './../lib/helpers';
import {expect} from 'chai';

describe('parseInt', function () {
  it('should parseInt text', function () {
    expect(parseInteger('08')).to.equal(8);
    expect(parseInteger('6')).to.equal(6);
    expect(parseInteger('10')).to.equal(10);
  });
});
