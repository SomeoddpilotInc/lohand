import {drop} from './../lib/helpers/lodash';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('drop', function () {
  it('should drop from left of arrays', function () {
    handlebars.registerHelper('drop', drop);

    var result = handlebars.compile('{{drop collection 1}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result, '2,3');

    assert.deepEqual(drop([1, 2, 3]), [2, 3]);
  });

  it('should drop multiple from left of arrays', function () {
    handlebars.registerHelper('drop', drop);

    var result = handlebars.compile('{{drop collection 2}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result, '3');

    assert.deepEqual(drop([1, 2, 3], 2), [3]);
  });
});
