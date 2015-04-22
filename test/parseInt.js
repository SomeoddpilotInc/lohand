import {parseInt as parseInteger} from './../lib/helpers';
const assert = require('assert');

describe('parseInt', function () {
  it('should parseInt text', function () {
    assert.equal(parseInteger('08'), 8);
    assert.equal(parseInteger('6'), 6);
    assert.equal(parseInteger('10'), 10);
  });
});
