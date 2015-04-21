const iter = require('../lib').helpers.iter;
const assert = require('assert');
const Spy = require('sinon').spy;

describe('iter', function () {
  it('should iter text', function () {
    var fnSpy = new Spy();

    iter([
      'Foo'
    ], {
      fn: fnSpy
    });

    assert.equal(fnSpy.calledOnce, true);
    assert.equal(fnSpy.calledOnce, true);
  });

  it('should iter text', function () {
    var inverseSpy = new Spy();

    iter([], {
      inverse: inverseSpy
    });

    assert.equal(inverseSpy.calledOnce, true);
    assert.equal(inverseSpy.calledOnce, true);
  });
});
