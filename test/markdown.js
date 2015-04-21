const markdown = require('../lib').helpers.markdown;
const assert = require('assert');

describe('markdown', function () {
  it('should markdown text', function () {
    assert.equal(markdown({
      fn: function () {
        return '#foo';
      }
    }), '<h1 id="foo">foo</h1>');
  });
});
