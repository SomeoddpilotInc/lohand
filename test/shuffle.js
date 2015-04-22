import {shuffle} from './../lib/helpers';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('shuffle', function () {
  it('should shuffle arrays', function () {
    handlebars.registerHelper('shuffle', shuffle);

    var result = handlebars.compile('{{shuffle collection}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result.length, 5);

    assert.equal(shuffle([1, 2, 3]).length, 3);
  });
});
