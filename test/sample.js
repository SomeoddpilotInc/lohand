import {sample} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('sample', function () {
  it('should sample arrays', function () {
    handlebars.registerHelper('sample', sample);

    var result = handlebars.compile('{{sample collection 2}}')({
      collection: [1, 2, 3]
    });

    expect(result.length).to.equal(3);

    expect(sample([1, 2, 3], 3).length).to.equal(3);
  });
});
