import {endsWith} from './../lib/helpers';
const assert = require('assert');
const Spy = require('sinon').spy;

describe('endsWith', function () {
  it('should call fn when true', function () {
    var fnSpy = new Spy();

    assert.equal(endsWith('abc', 'c', {
      fn: fnSpy,
      hash: {}
    }));

    assert.equal(fnSpy.calledOnce, true);
  });

  it('should call inverse when false', function () {
    var inverseSpy = new Spy();

    assert.equal(endsWith('abc', 'a', {
      inverse: inverseSpy,
      hash: {}
    }));

    assert.equal(inverseSpy.calledOnce, true);
  });
});
