import {pluck} from './../lib/helpers';
import {expect} from 'chai';
import handlebars from 'handlebars';

describe('pluck', function () {
  it('should pluck arrays', function () {
    handlebars.registerHelper('pluck', pluck);

    var result = handlebars.compile('{{pluck collection toPluck}}')({
      collection: [{user: 'foo'}],
      toPluck: 'user'
    });

    expect(result).to.equal('foo');

    expect(pluck([{user: 'foo'}], 'user')).to.deep.equal(['foo']);
  });
});
