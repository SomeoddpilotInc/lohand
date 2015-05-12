import {union} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('union', function () {
  it('should union arrays', function () {
    handlebars.registerHelper('union', union);

    const a = [1, 2, 3, 4, 5];
    const b = ['a', 'b', 'c'];

    var result = handlebars.compile('{{union a b}}')({
      a: a,
      b: b
    });

    expect(result).to.equal('1,2,3,4,5,a,b,c');

    expect(union(a, b)).to.deep.equal([1, 2, 3, 4, 5, 'a', 'b', 'c']);
  });
});
