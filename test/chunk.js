import {chunk} from './../lib/helpers/lodash';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('chunk', function () {
  it('should chunk arrays', function () {
    handlebars.registerHelper('chunk', chunk);
    handlebars.registerHelper('join', function (coll) {
      return coll.join(', ');
    });

    var result = handlebars.compile('{{join (chunk collection 2)}}')({
      collection: [1, 2, 3, 4]
    });

    assert.equal(result, '1,2, 3,4');

    assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
  });
});
