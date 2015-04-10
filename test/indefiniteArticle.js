const indefiniteArticle = require('../index').helpers.indefiniteArticle;
const assert = require('assert');

describe('indefiniteArticle', function () {
  it('should return the indefinite article for a string', function () {
    assert.equal(indefiniteArticle('Foo Bar'), 'a', 'a Foo Bar');
    assert.equal(indefiniteArticle('Apple'), 'an', 'an Apple');
    assert.equal(indefiniteArticle('once'), 'a', 'a uni');
    assert.equal(indefiniteArticle('UKA'), 'a', 'a UKA');
    assert.equal(indefiniteArticle('ybl'), 'an', 'an yblo');
    assert.equal(indefiniteArticle('Yttrium'), 'an', 'an Yttrium');
  });
});
