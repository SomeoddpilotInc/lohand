import {endsWith} from './../lib/helpers';
import {expect} from 'chai';
import {spy as Spy} from 'sinon';

describe('endsWith', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();

    endsWith('abc', 'c', {
      fn: fnSpy,
      hash: {}
    });

    expect(fnSpy.calledOnce).to.be.true;
  });

  it('should call inverse when false', function () {
    var inverseSpy = new Spy();

    endsWith('abc', 'a', {
      inverse: inverseSpy,
      hash: {}
    });

    expect(inverseSpy.calledOnce).to.be.true;
  });
});
