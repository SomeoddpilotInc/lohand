const words = require('../index').helpers.words;
const assert = require('assert');

describe('words', function () {
  it('should split words into array', function () {
    assert.equal(words('Fred, Barney, & Pebbles')[0], 'Fred');
    assert.equal(words('Fred, Barney, & Pebbles')[1], 'Barney');
    assert.equal(words('Fred, Barney, & Pebbles')[2], 'Pebbles');
  });
});
