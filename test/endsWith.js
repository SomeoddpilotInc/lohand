import {endsWith} from './../lib/helpers';
const assert = require('assert');
const Spy = require('sinon').spy;
const handlebars = require('handlebars');

describe('endsWith', function () {
  it('should play well with handlebars', function () {
    handlebars.registerHelper('endsWith', endsWith);

    var result = handlebars.compile('{{#endsWith "foo" "o"}}true{{/endsWith}}')();

    assert.equal(result, 'true');

    var inverseResult = handlebars.compile('{{#endsWith "foo" "f"}}{{else}}true{{/endsWith}}')();

    assert.equal(inverseResult, 'true');
  });

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
