const greaterThan = require('../index').helpers.greaterThan;
const assert = require('assert');
const Spy = require('sinon').spy;

describe('greaterThan', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();
    var inverseSpy = new Spy();

    greaterThan(2, 1, {
      fn: fnSpy,
      inverse: inverseSpy
    });
    assert.equal(fnSpy.calledOnce, true);
    assert.equal(inverseSpy.called, false);
  });
});
