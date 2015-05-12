import {slice} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('slice', function () {
  it('should slice arrays', function () {
    handlebars.registerHelper('slice', slice);

    const collection = [1, 2, 3, 4, 5];

    var result = handlebars.compile('{{slice collection 0 2}}')({
      collection: collection
    });

    expect(result).to.equal('1,2');

    expect(slice(collection, 0, 2)).to.deep.equal([1, 2]);
  });

  it('should slice arrays', function () {
    handlebars.registerHelper('slice', slice);

    const collection = [1, 2, 3, 4, 5];

    var result = handlebars.compile('{{slice collection 1 3}}')({
      collection: collection
    });

    expect(result).to.equal('2,3');

    expect(slice(collection, 1, 3)).to.deep.equal([2, 3]);
  });
});
