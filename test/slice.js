import {slice} from './../lib/helpers';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('slice', function () {
  it('should slice arrays', function () {
    handlebars.registerHelper('slice', slice);

    const collection = [1, 2, 3, 4, 5];

    var result = handlebars.compile('{{slice collection 0 2}}')({
      collection: collection
    });

    assert.equal(result, '1,2');

    assert.deepEqual(slice(collection, 0, 2), [1, 2]);
  });

  it('should slice arrays', function () {
    handlebars.registerHelper('slice', slice);

    const collection = [1, 2, 3, 4, 5];

    var result = handlebars.compile('{{slice collection 1 3}}')({
      collection: collection
    });

    assert.equal(result, '2,3');

    assert.deepEqual(slice(collection, 1, 3), [2, 3]);
  });
});
