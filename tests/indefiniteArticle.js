const indefiniteArticle = require('../index').helpers.indefiniteArticle;
const assert = require('assert');

describe('indefiniteArticle', function () {
  it('should return the indefinite article for a string', function () {
    assert.equal(indefiniteArticle(''), 'an', 'an ');
    assert.equal(indefiniteArticle('a'), 'a', 'an a');
    assert.equal(indefiniteArticle('g'), 'a', 'a g');
    assert.equal(indefiniteArticle('hour'), 'an', 'an hour');
    assert.equal(indefiniteArticle('honor'), 'an', 'an honor');
    assert.equal(indefiniteArticle('Foo Bar'), 'a', 'a Foo Bar');
    assert.equal(indefiniteArticle('Apple'), 'an', 'an Apple');
    assert.equal(indefiniteArticle('once'), 'a', 'a once');
    assert.equal(indefiniteArticle('ybl'), 'an', 'an yblo');
    assert.equal(indefiniteArticle('Yttrium'), 'an', 'an Yttrium');
  });
});
