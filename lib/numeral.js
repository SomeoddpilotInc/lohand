import numeral from 'numeral';

function numeralHelper(number, format) {
  return numeral(number).format(format);
}

export default numeralHelper;
