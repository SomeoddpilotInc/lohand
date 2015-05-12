import {shuffle} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('shuffle', function () {
  it('should shuffle arrays', function () {
    handlebars.registerHelper('shuffle', shuffle);

    var result = handlebars.compile('{{shuffle collection}}')({
      collection: [1, 2, 3]
    });

    expect(result.length).to.equal(5);

    expect(shuffle([1, 2, 3]).length).to.equal(3);
  });
});
