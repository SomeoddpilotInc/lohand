import {every} from './../lib/helpers';
import {expect} from 'chai';
import {spy as Spy} from 'sinon';

describe('every', function () {
  it('should call fn every n', function () {
    var fnSpy = new Spy(function () {
      return 'true';
    });
    var inverseSpy = new Spy(function () {
      return 'false';
    });

    var result = every(3, [
      'Foo',
      'Bar',
      'Baz'
    ], {
      fn: fnSpy,
      inverse: inverseSpy,
      hash: {}
    });

    expect(fnSpy.calledOnce).to.be.true;
    expect(inverseSpy.calledTwice).to.be.true;
    expect(result).to.equal('truefalsefalse');
  });

  it('should respect offset', function () {
    var fnSpy = new Spy(function () {
      return 'true';
    });
    var inverseSpy = new Spy(function () {
      return 'false';
    });

    var result = every(3, [
      'Foo',
      'Bar',
      'Baz'
    ], {
      fn: fnSpy,
      inverse: inverseSpy,
      hash: {
        offset: 1
      }
    });

    expect(fnSpy.calledOnce).to.be.true;
    expect(inverseSpy.calledTwice).to.be.true;
    expect(result).to.equal('falsetruefalse');
  });
});
