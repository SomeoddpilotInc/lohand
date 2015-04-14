import {at} from './../lib/helpers/lodash';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('at', function () {
  it('should find element at index', function () {
    handlebars.registerHelper('at', at);

    assert.deepEqual(at(['Foo Bar'], 1), [undefined]);
    assert.deepEqual(at([1, 2, 3], 1), [2]);
    assert.deepEqual(at([1, 2, 3], [1, 2]), [2, 3]);

    var result = handlebars.compile('{{at collection 1}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result, '2,');
  });
});
