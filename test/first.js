const first = require('../lib').helpers.first;
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('first', function () {
  it('should select first from array', function () {
    handlebars.registerHelper('first', first);

    var result = handlebars.compile('{{first collection}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result, '1');

    assert.deepEqual(first([1, 2, 3]), 1);
  });
});
