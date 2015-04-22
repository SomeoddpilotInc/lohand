import {capitalize} from './../lib/helpers/lodash';
import {expect} from 'chai';

describe('capitalize', function () {
  it('should capitalize text', function () {
    expect(capitalize('fred')).to.equal('Fred');
    expect(capitalize('fred flintstone')).to.equal('Fred flintstone');
  });
});
