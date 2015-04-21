const numeral = require('../index').helpers.numeral;
const assert = require('assert');

describe('numeral', function () {
  it('should numeral text', function () {
    assert.equal(numeral(1000, '0,0'), '1,000');
    assert.equal(numeral(10000.23, '0,0'), '10,000');
    assert.equal(numeral(10000.23, '+0,0'), '+10,000');
    assert.equal(numeral(1230974, '0.0a'), '1.2m');
    assert.equal(numeral(1460, '0 a'), '1 k');
    assert.equal(numeral(1, '0o'), '1st');
    assert.equal(numeral(52, '0o'), '52nd');
    assert.equal(numeral(1000.234, '$0,0.00'), '$1,000.23');
  });
});
