import {number} from './../lib/helpers';
import {expect} from 'chai';

describe('number', function () {
  it('should number text', function () {
    expect(number(1000, '0,0')).to.equal('1,000');
    expect(number(10000.23, '0,0')).to.equal('10,000');
    expect(number(10000.23, '+0,0')).to.equal('+10,000');
    expect(number(1230974, '0.0a')).to.equal('1.2m');
    expect(number(1460, '0 a')).to.equal('1 k');
    expect(number(1, '0o')).to.equal('1st');
    expect(number(52, '0o')).to.equal('52nd');
    expect(number(1000.234, '$0,0.00')).to.equal('$1,000.23');
  });
});
