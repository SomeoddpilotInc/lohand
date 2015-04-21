const number = require('../lib').helpers.number;
const assert = require('assert');

describe('number', function () {
  it('should number text', function () {
    assert.equal(number(1000, '0,0'), '1,000');
    assert.equal(number(10000.23, '0,0'), '10,000');
    assert.equal(number(10000.23, '+0,0'), '+10,000');
    assert.equal(number(1230974, '0.0a'), '1.2m');
    assert.equal(number(1460, '0 a'), '1 k');
    assert.equal(number(1, '0o'), '1st');
    assert.equal(number(52, '0o'), '52nd');
    assert.equal(number(1000.234, '$0,0.00'), '$1,000.23');
  });
});
