import {encodeURIComponent as encodeURIComponentHelper} from './../lib/helpers';
const assert = require('assert');
const handlebars = require('handlebars');

describe('encodeURIComponent', function () {
  it('should encodeURIComponent text', function () {
    handlebars.registerHelper('encodeURIComponent', encodeURIComponent);

    assert.equal(encodeURIComponentHelper('Foo Bar'), 'Foo%20Bar');
    assert.equal(encodeURIComponentHelper('--foo-bar'), '--foo-bar');
    assert.equal(encodeURIComponentHelper('__foo_bar__'), '__foo_bar__');

    var result = handlebars.compile('{{encodeURIComponent "Foo & Something"}}')();

    assert.equal(result, 'Foo%20%26%20Something');
  });
});
