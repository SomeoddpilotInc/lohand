const startsWith = require('../index').helpers.startsWith;
const assert = require('assert');
const Spy = require('sinon').spy;

describe('startsWith', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();

    assert.equal(startsWith('abc', 'a', {
      fn: fnSpy,
      hash: {}
    }));

    assert.equal(fnSpy.calledOnce, true);
  });

  it('should call inverse when false', function () {
    var inverseSpy = new Spy();

    assert.equal(startsWith('abc', 'b', {
      inverse: inverseSpy,
      hash: {}
    }));

    assert.equal(inverseSpy.calledOnce, true);
  });
});
