import numeral from 'numeral';

function number(number, format) {
  return numeral(number).format(format);
}

export default number;
