import {lessThan} from './../lib/helpers';
const assert = require('assert');
const Spy = require('sinon').spy;

describe('lessThan', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();
    var inverseSpy = new Spy();

    lessThan(1, 2, {
      fn: fnSpy,
      inverse: inverseSpy
    });
    assert.equal(fnSpy.calledOnce, true);
    assert.equal(inverseSpy.called, false);
  });
});
