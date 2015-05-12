import {indefiniteArticle} from './../lib/helpers';
import {expect} from 'chai';

describe('indefiniteArticle', function () {
  it('should return the indefinite article for a string', function () {
    expect(indefiniteArticle('')).to.equal('an', 'an ');
    expect(indefiniteArticle('a')).to.equal('an', 'an a');
    expect(indefiniteArticle('g')).to.equal('a', 'a g');
    expect(indefiniteArticle('hour')).to.equal('an', 'an hour');
    expect(indefiniteArticle('honor')).to.equal('an', 'an honor');
    expect(indefiniteArticle('Foo Bar')).to.equal('a', 'a Foo Bar');
    expect(indefiniteArticle('Apple')).to.equal('an', 'an Apple');
    expect(indefiniteArticle('once')).to.equal('a', 'a once');
    expect(indefiniteArticle('ybl')).to.equal('an', 'an yblo');
    expect(indefiniteArticle('Yttrium')).to.equal('an', 'an Yttrium');
  });
});
