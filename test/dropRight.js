import {dropRight} from './../lib/helpers/lodash';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('dropRight', function () {
  it('should dropRight from left of arrays', function () {
    handlebars.registerHelper('dropRight', dropRight);

    var result = handlebars.compile('{{dropRight collection 1}}')({
      collection: [1, 2, 3]
    });

    expect(result).to.equal('1,2');

    expect(dropRight([1, 2, 3])).to.deep.equal([1, 2]);
  });

  it('should dropRight multiple from left of arrays', function () {
    handlebars.registerHelper('dropRight', dropRight);

    var result = handlebars.compile('{{dropRight collection 2}}')({
      collection: [1, 2, 3]
    });

    expect(result).to.equal('1');

    expect(dropRight([1, 2, 3], 2)).to.deep.equal([1]);
  });
});
