import {sample} from './../lib/helpers';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('sample', function () {
  it('should sample arrays', function () {
    handlebars.registerHelper('sample', sample);

    var result = handlebars.compile('{{sample collection 2}}')({
      collection: [1, 2, 3]
    });

    assert.equal(result.length, 3);

    assert.equal(sample([1, 2, 3], 3).length, 3);
  });
});
