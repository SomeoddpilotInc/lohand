import {deburr} from './../lib/helpers/lodash';
const assert = require('assert');
const handlebars = require('handlebars');

describe('deburr', function () {
  it('should deburr text', function () {
    handlebars.registerHelper('deburr', deburr);

    assert.equal(deburr('déjà vu'), 'deja vu');

    var result = handlebars.compile('{{deburr "déjà vu"}}')();

    assert.equal(result, 'deja vu');
  });
});
