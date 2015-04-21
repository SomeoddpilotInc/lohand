const every = require('../lib').helpers.every;
const assert = require('assert');
const Spy = require('sinon').spy;

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

    assert.equal(fnSpy.calledOnce, true, 'only call normal once');
    assert.equal(inverseSpy.calledTwice, true, 'call inverse two times');
    assert.equal(result, 'truefalsefalse');
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

    assert.equal(fnSpy.calledOnce, true, 'only call normal once');
    assert.equal(inverseSpy.calledTwice, true, 'call inverse two times');
    assert.equal(result, 'falsetruefalse');
  });
});
