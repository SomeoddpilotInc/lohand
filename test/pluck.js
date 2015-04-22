import {pluck} from './../lib/helpers';
const assert = require('chai').assert;
const handlebars = require('handlebars');

describe('pluck', function () {
  it('should pluck arrays', function () {
    handlebars.registerHelper('pluck', pluck);

    var result = handlebars.compile('{{pluck collection toPluck}}')({
      collection: [{user: 'foo'}],
      toPluck: 'user'
    });

    assert.equal(result, 'foo');

    assert.deepEqual(pluck([{user: 'foo'}], 'user'), ['foo']);
  });
});
