const union = require('../lib').helpers.union;
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('union', function () {
  it('should union arrays', function () {
    handlebars.registerHelper('union', union);

    const a = [1, 2, 3, 4, 5];
    const b = ['a', 'b', 'c'];

    var result = handlebars.compile('{{union a b}}')({
      a: a,
      b: b
    });

    assert.equal(result, '1,2,3,4,5,a,b,c');

    assert.deepEqual(union(a, b), [1, 2, 3, 4, 5, 'a', 'b', 'c']);
  });
});
