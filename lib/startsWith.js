var _ = require('lodash');

module.exports = function startsWith(string, target, options) {
  var position = options.hash.position || undefined;

  if (_.startsWith(string, target, position)) {
    return options.fn(this);
  }
  return options.inverse(this);
};
