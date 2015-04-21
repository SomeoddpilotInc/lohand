var _ = require('lodash');

function startsWith(string, target, options) {
  var position = options.hash.position || undefined;

  if (_.startsWith(string, target, position)) {
    return options.fn(this);
  }
  return options.inverse(this);
}

export default startsWith;
