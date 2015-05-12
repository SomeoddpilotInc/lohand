import {first} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('first', function () {
  it('should select first from array', function () {
    handlebars.registerHelper('first', first);

    var result = handlebars.compile('{{first collection}}')({
      collection: [1, 2, 3]
    });

    expect(result).to.equal('1');

    expect(first([1, 2, 3])).to.deep.equal(1);
  });
});
