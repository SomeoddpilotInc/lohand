import {startCase} from './../lib/helpers';
const assert = require('assert');

describe('startCase', function () {
  it('should startCase text', function () {
    assert.equal(startCase('Foo Bar'), 'Foo Bar');
    assert.equal(startCase('--foo-bar'), 'Foo Bar');
    assert.equal(startCase('__foo_bar__'), 'Foo Bar');
  });
});
