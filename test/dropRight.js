const dropRight = require('../lib').helpers.dropRight;
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('dropRight', function () {
  it('should dropRight from left of arrays', function () {
    handlebars.registerHelper('dropRight', dropRight);

    var result = handlebars.compile('{{dropRight collection 1}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result, '1,2');

    assert.deepEqual(dropRight([1, 2, 3]), [1, 2]);
  });

  it('should dropRight multiple from left of arrays', function () {
    handlebars.registerHelper('dropRight', dropRight);

    var result = handlebars.compile('{{dropRight collection 2}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result, '1');

    assert.deepEqual(dropRight([1, 2, 3], 2), [1]);
  });
});
