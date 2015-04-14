var numeral = require('numeral');

module.exports = function (number, format) {
  return numeral(number).format(format);
};
