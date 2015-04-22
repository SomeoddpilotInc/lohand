import {padRight} from './../lib/helpers';
const assert = require('assert');

describe('padRight', function () {
  it('should padRight text', function () {
    assert.equal(padRight('abc', 6), 'abc   ');
    assert.equal(padRight('abc', 6, '_-'), 'abc_-_');
    assert.equal(padRight('abc', 3), 'abc');
  });
});
