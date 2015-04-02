var _ = require('lodash');

module.exports = function startsWith() {
  var options = _.last(arguments);

  if (_.startsWith.apply(this, _.dropRight(arguments))) {
    return options.fn(this);
  }
  return options.inverse(this);
};
