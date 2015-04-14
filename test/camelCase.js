import {camelCase} from './../lib/helpers/lodash';
const assert = require('assert');
const handlebars = require('handlebars');

describe('camelCase', function () {
  it('should camelCase text', function () {
    handlebars.registerHelper('camelCase', camelCase);

    assert.equal(camelCase('Foo Bar'), 'fooBar');
    assert.equal(camelCase('--foo-bar'), 'fooBar');
    assert.equal(camelCase('__foo_bar__'), 'fooBar');

    var result = handlebars.compile('{{camelCase "Foo Bar"}}')();

    assert.equal(result, 'fooBar');
  });
});
