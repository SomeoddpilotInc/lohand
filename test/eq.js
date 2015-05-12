import {eq} from './../lib/helpers';
import {expect} from 'chai';
import {spy as Spy} from 'sinon';

describe('eq', function () {
  it('should eq text', function () {
    var inverseSpy = new Spy();

    eq('Foo Bar', 'foobar', {
      inverse: inverseSpy
    });

    expect(inverseSpy.calledOnce).to.be.true;
  });

  it('should eq text', function () {
    var fnSpy = new Spy();

    eq('foobar', 'foobar', {
      fn: fnSpy
    });

    expect(fnSpy.calledOnce).to.be.true;
  });
});
