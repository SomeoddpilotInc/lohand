import {last} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('last', function () {
  it('should select last from array', function () {
    handlebars.registerHelper('last', last);

    var result = handlebars.compile('{{last collection}}')({
      collection: [1, 2, 3]
    });

    expect(result).to.equal('3');

    expect(last([1, 2, 3])).to.equal(3);
  });
});
