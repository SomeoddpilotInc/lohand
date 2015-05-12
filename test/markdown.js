import {markdown} from './../lib/helpers';
import {expect} from 'chai';

describe('markdown', function () {
  it('should markdown text', function () {
    expect(markdown({
      fn: function () {
        return '#foo';
      }
    })).to.equal('<h1 id="foo">foo</h1>');
  });
});
