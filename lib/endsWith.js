var _ = require('lodash');

module.exports = function endsWith() {
  var options = _.last(arguments);

  if (_.endsWith.apply(this, _.dropRight(arguments))) {
    return options.fn(this);
  }
  return options.inverse(this);
};
