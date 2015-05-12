import {trunc} from './../lib/helpers';
import {expect} from 'chai';

describe('trunc', function () {
  it('should trunc text', function () {
    expect(trunc('hi-diddly-ho there, neighborino')).to.equal('hi-diddly-ho there, neighbo...');
    expect(trunc('hi-diddly-ho there, neighborino', 24)).to.equal('hi-diddly-ho there, n...');
    expect(trunc('hi-diddly-ho there, neighborino', {length: 24, separator: ' '})).to.equal('hi-diddly-ho there,...');
    expect(trunc('hi-diddly-ho there, neighborino', {length: 24, separator: '/,? +/'})).to.equal('hi-diddly-ho there, n...');
    expect(trunc('hi-diddly-ho there, neighborino', {omission: ' […]'})).to.equal('hi-diddly-ho there, neighb […]');
  });
});
