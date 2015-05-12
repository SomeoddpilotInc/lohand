import {encodeURIComponent as encodeURIComponentHelper} from './../lib/helpers';
import {expect} from 'chai';

describe('encodeURIComponent', function () {
  it('should encodeURIComponent text', function () {
    expect(encodeURIComponentHelper('Foo Bar')).to.equal('Foo%20Bar');
    expect(encodeURIComponentHelper('--foo-bar')).to.equal('--foo-bar');
    expect(encodeURIComponentHelper('__foo_bar__')).to.equal('__foo_bar__');
  });
});
