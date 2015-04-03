var _ = require('lodash');

module.exports = function every(amount, collection, options) {
  var offset = options.hash.offset === undefined ?
    0 :
    options.hash.offset;

  function reduceCollection(memo, item, index) {
    if ((index - offset) % amount) {
      return memo + options.inverse(collection);
    }
    return memo + options.fn(collection);
  }

  return _.reduce(collection, reduceCollection, '');
};
