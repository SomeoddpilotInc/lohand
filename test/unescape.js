import {unescape} from './../lib/helpers';
import {expect} from 'chai';

describe('unescape', function () {
  it('should unescape text', function () {
    expect(unescape('fred, barney, &amp; pebbles')).to.equal('fred, barney, & pebbles');
  });
});
