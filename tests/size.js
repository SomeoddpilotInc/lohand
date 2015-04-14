const size = require('../index').helpers.size;
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('size', function () {
  it('should size arrays', function () {
    handlebars.registerHelper('size', size);

    var object = {
      a: 1,
      b: 2,
      c: 3
    };

    var result = handlebars.compile('{{size collection}}')({
      collection: object
    });

    assert.equal(result, 3);

    assert.equal(size(object), 3);
  });
});
