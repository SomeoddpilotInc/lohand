import {capitalize} from './../lib/helpers/lodash';
const assert = require('assert');
const handlebars = require('handlebars');

describe('capitalize', function () {
  it('should capitalize text', function () {
    handlebars.registerHelper('capitalize', capitalize);

    assert.equal(capitalize('fred'), 'Fred');
    assert.equal(capitalize('fred flintstone'), 'Fred flintstone');

    var result = handlebars.compile('{{capitalize "foo bar"}}')();

    assert.equal(result, 'Foo bar');
  });
});
