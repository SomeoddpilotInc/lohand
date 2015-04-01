const trunc = require('../index').helpers.trunc;
const assert = require('assert');

describe('trunc', function () {
  it('should trunc text', function () {
    assert.equal(trunc('hi-diddly-ho there, neighborino'), 'hi-diddly-ho there, neighbo...');
    assert.equal(trunc('hi-diddly-ho there, neighborino', 24), 'hi-diddly-ho there, n...');
    assert.equal(trunc('hi-diddly-ho there, neighborino', {length: 24, separator: ' '}), 'hi-diddly-ho there,...');
    assert.equal(trunc('hi-diddly-ho there, neighborino', {length: 24, separator: '/,? +/'}), 'hi-diddly-ho there, n...');
    assert.equal(trunc('hi-diddly-ho there, neighborino', {omission: ' […]'}), 'hi-diddly-ho there, neighb […]');
  });
});
