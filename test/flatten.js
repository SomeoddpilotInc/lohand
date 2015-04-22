import {flatten} from './../lib/helpers';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('flatten', function () {
  it('should flatten arrays', function () {
    handlebars.registerHelper('flatten', flatten);
    handlebars.registerHelper('join', function (col) {
      return col.join(':');
    });

    const collection = [1, [2, 3, [4]]];

    var result = handlebars.compile('{{join (flatten collection)}}')({
      collection: collection
    });

    assert.equal(result, '1:2:3:4');

    assert.deepEqual(flatten(collection), [1, 2, 3, [4]]);
  });

  it('should flatten arrays deeply', function () {
    handlebars.registerHelper('flatten', flatten);
    handlebars.registerHelper('join', function (col) {
      return col.join(':');
    });

    const collection = [1, [2, 3, [4]]];

    var result = handlebars.compile('{{join (flatten collection true)}}')({
      collection: collection
    });

    assert.equal(result, '1:2:3:4');

    assert.deepEqual(flatten(collection, true), [1, 2, 3, 4]);
  });
});
