import {at} from './../lib/helpers/lodash';
import {expect} from 'chai';

describe('at', () => {
  it('should find element at props', () => {
    expect(at(['Foo Bar'], 1))
      .to.deep.equal([undefined]);

    expect(at([1, 2, 3], 1))
      .to.deep.equal([2]);

    expect(at([1, 2, 3], [1, 2]))
      .to.deep.equal([2, 3]);
  });
});
