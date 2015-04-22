import {words} from './../lib/helpers';
import {expect} from 'chai';

describe('words helper', function () {
  it('should split words into array', function () {
    expect(words('Fred, Barney, & Pebbles'))
      .to.deep.equal(['Fred', 'Barney', 'Pebbles']);
  });
});
