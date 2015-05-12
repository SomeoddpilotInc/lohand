import {iter} from './../lib/helpers';
import {expect} from 'chai';
import {spy as Spy} from 'sinon';

describe('iter', function () {
  it('should iter text', function () {
    var fnSpy = new Spy();

    iter([
      'Foo'
    ], {
      fn: fnSpy
    });

    expect(fnSpy.calledOnce).to.be.true;
  });

  it('should iter text', function () {
    var inverseSpy = new Spy();

    iter([], {
      inverse: inverseSpy
    });

    expect(inverseSpy.calledOnce).to.be.true;
  });
});
