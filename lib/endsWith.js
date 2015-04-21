var _ = require('lodash');

/**
 * endsWith helper
 *
 * @param {string} string - sting to test
 * @param {string} target - target character
 * @param {Object} options - handlebars context
 * @returns {string} rendered output
 */
module.exports = function endsWith(string, target, options) {
  var position = options.hash.position || undefined;

  if (_.endsWith(string, target, position)) {
    return options.fn(this);
  }
  return options.inverse(this);
};
