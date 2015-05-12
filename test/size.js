import {size} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('size', function () {
  it('should size arrays', function () {
    handlebars.registerHelper('size', size);

    var object = {
      a: 1,
      b: 2,
      c: 3
    };

    var result = handlebars.compile('{{size collection}}')({
      collection: object
    });

    expect(result).to.equal('3');

    expect(size(object)).to.equal(3);
  });
});
