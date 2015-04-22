import {deburr} from './../lib/helpers/lodash';
import {expect} from 'chai';

describe('deburr', function () {
  it('should deburr text', function () {
    expect(deburr('déjà vu')).to.equal('deja vu');
  });
});
