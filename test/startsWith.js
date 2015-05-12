import {startsWith} from './../lib/helpers';
import {expect} from 'chai';
import {spy as Spy} from 'sinon';

describe('startsWith', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();

    startsWith('abc', 'a', {
      fn: fnSpy,
      hash: {}
    });

    expect(fnSpy.calledOnce).to.be.true;
  });

  it('should call inverse when false', function () {
    var inverseSpy = new Spy();

    startsWith('abc', 'b', {
      inverse: inverseSpy,
      hash: {}
    });

    expect(inverseSpy.calledOnce).to.be.true;
  });
});
