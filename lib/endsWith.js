var _ = require('lodash');

module.exports = function endsWith(string, target, options) {
  var position = options.hash.position || undefined;

  if (_.endsWith(string, target, position)) {
    return options.fn(this);
  }
  return options.inverse(this);
};
