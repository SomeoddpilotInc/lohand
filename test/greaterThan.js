import {greaterThan} from './../lib/helpers';
import {expect} from 'chai';
import {spy as Spy} from 'sinon';

describe('greaterThan', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();
    var inverseSpy = new Spy();

    greaterThan(2, 1, {
      fn: fnSpy,
      inverse: inverseSpy
    });
    expect(fnSpy.calledOnce).to.be.true;
    expect(inverseSpy.called).to.be.false;
  });
});
