import {flatten} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('flatten', function () {
  it('should flatten arrays', function () {
    handlebars.registerHelper('flatten', flatten);
    handlebars.registerHelper('join', function (col) {
      return col.join(':');
    });

    const collection = [1, [2, 3, [4]]];

    var result = handlebars.compile('{{join (flatten collection)}}')({
      collection: collection
    });

    expect(result).to.equal('1:2:3:4');

    expect(flatten(collection)).to.deep.equal([1, 2, 3, [4]]);
  });

  it('should flatten arrays deeply', function () {
    handlebars.registerHelper('flatten', flatten);
    handlebars.registerHelper('join', function (col) {
      return col.join(':');
    });

    const collection = [1, [2, 3, [4]]];

    var result = handlebars.compile('{{join (flatten collection true)}}')({
      collection: collection
    });

    expect(result).to.equal('1:2:3:4');

    expect(flatten(collection, true)).to.deep.equal([1, 2, 3, 4]);
  });
});
