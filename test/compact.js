import {compact} from './../lib/helpers/lodash';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('compact', function () {
  it('should compact arrays', function () {
    handlebars.registerHelper('compact', compact);

    var result = handlebars.compile('{{compact collection}}')({
      collection: [0, 1, false, 2, '', 3]
    });

    expect(result).to.equal('1,2,3');

    expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
  });
});
