import {chunk} from './../lib/helpers/lodash';
import handlebars from 'handlebars';
import {expect} from 'chai';

describe('chunk', function () {
  it('should chunk arrays', function () {
    handlebars.registerHelper('chunk', chunk);
    handlebars.registerHelper('join', function (coll) {
      return coll.join(', ');
    });

    var result = handlebars.compile('{{join (chunk collection 2)}}')({
      collection: [1, 2, 3, 4]
    });

    expect(result).to.equal('1,2, 3,4');

    expect(chunk([1, 2, 3, 4], 2)).to.deep.equal([[1, 2], [3, 4]]);
  });
});
