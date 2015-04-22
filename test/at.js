import {at} from './../lib/helpers/lodash';
const assert = require('chai').assert;

describe('at', function () {
  it('should find element at lib', function () {
    assert.deepEqual(at(['Foo Bar'], 1), [undefined]);
    assert.deepEqual(at([1, 2, 3], 1), [2]);
    assert.deepEqual(at([1, 2, 3], [1, 2]), [2, 3]);
  });
});
