import {lessThan} from './../lib/helpers';
import {expect} from 'chai';
import {spy as Spy} from 'sinon';

describe('lessThan', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();
    var inverseSpy = new Spy();

    lessThan(1, 2, {
      fn: fnSpy,
      inverse: inverseSpy
    });

    expect(fnSpy.calledOnce).to.be.true;
    expect(inverseSpy.called).to.be.false;
  });

  it('should call invers when false', function () {
    var fnSpy = new Spy();
    var inverseSpy = new Spy();

    lessThan(2, 1, {
      fn: fnSpy,
      inverse: inverseSpy
    });

    expect(fnSpy.calledOnce).to.be.false;
    expect(inverseSpy.called).to.be.true;
  });
});
