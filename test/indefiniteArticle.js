const indefiniteArticle = require('../index').helpers.indefiniteArticle;
const assert = require('assert');

describe('indefiniteArticle', function () {
  it('should return the indefinite article for a string', function () {
    assert.equal(indefiniteArticle('Foo Bar'), 'a');
    assert.equal(indefiniteArticle('Apple'), 'an');
  });
});
