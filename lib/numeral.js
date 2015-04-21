var numeral = require('numeral');

function numeralHelper(number, format) {
  return numeral(number).format(format);
}

export default numeralHelper;
