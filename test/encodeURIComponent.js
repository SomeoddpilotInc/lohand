const encodeURIComponentHelper = require('../lib').helpers.encodeURIComponent;
const assert = require('assert');

describe('encodeURIComponent', function () {
  it('should encodeURIComponent text', function () {
    assert.equal(encodeURIComponentHelper('Foo Bar'), 'Foo%20Bar');
    assert.equal(encodeURIComponentHelper('--foo-bar'), '--foo-bar');
    assert.equal(encodeURIComponentHelper('__foo_bar__'), '__foo_bar__');
  });
});
