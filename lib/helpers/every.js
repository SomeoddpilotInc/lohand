import _ from 'lodash';

/**
 * every helper
 *
 * @module lohand
 *
 * @param {number} amount
 * @param {Object|Array} collection
 * @param {Object} context
 * @param {Function} context.fn
 * @param {Function} context.inverse
 * @param {Object} context.hash
 * @param {number} context.hash.offset
 *
 * @return {string}
 */
function every(amount, collection, {inverse, fn, hash: {offset = 0}}) {
  function reduceCollection(memo, item, index) {
    if ((index - offset) % amount) {
      return memo + inverse(collection);
    }
    return memo + fn(collection);
  }

  return _.reduce(collection, reduceCollection, '');
}

export default every;
