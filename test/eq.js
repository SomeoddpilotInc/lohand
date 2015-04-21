const eq = require('../lib').helpers.eq;
const assert = require('assert');
const Spy = require('sinon').spy;

describe('eq', function () {
  it('should eq text', function () {
    var inverseSpy = new Spy();

    eq('Foo Bar', 'foobar', {
      inverse: inverseSpy
    });

    assert.equal(inverseSpy.calledOnce, true);
    assert.equal(inverseSpy.calledOnce, true);
  });

  it('should eq text', function () {
    var fnSpy = new Spy();

    eq('foobar', 'foobar', {
      fn: fnSpy
    });

    assert.equal(fnSpy.calledOnce, true);
    assert.equal(fnSpy.calledOnce, true);
  });
});
