import {drop} from './../lib/helpers/lodash';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('drop', function () {
  it('should drop from left of arrays', function () {
    handlebars.registerHelper('drop', drop);

    var result = handlebars.compile('{{drop collection 1}}')({
      collection: [1, 2, 3]
    });

    expect(result).to.equal('2,3');

    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it('should drop multiple from left of arrays', function () {
    handlebars.registerHelper('drop', drop);

    var result = handlebars.compile('{{drop collection 2}}')({
      collection: [1, 2, 3]
    });

    expect(result).to.equal('3');

    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });
});
