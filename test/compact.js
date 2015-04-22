import {compact} from './../lib/helpers/lodash';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('compact', function () {
  it('should compact arrays', function () {
    handlebars.registerHelper('compact', compact);

    var result = handlebars.compile('{{compact collection}}')({
      collection: [0, 1, false, 2, '', 3]
    });

    assert.equal(result, '1,2,3');

    assert.deepEqual(compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
  });
});
