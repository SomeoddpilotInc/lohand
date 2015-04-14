const last = require('../index').helpers.last;
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('last', function () {
  it('should select last from array', function () {
    handlebars.registerHelper('last', last);

    var result = handlebars.compile('{{last collection}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result, '3');

    assert.deepEqual(last([1, 2, 3]), 3);
  });
});
