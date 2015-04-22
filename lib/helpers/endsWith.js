import _ from 'lodash';

/**
 * endsWith helper
 *
 * @module lohand
 *
 * @param {string} string - sting to test
 * @param {string} target - target character
 * @param {Object} options - handlebars context
 * @returns {string} rendered output
 */
function endsWith(string, target, {fn, inverse, hash: {position}}) {
  if (_.endsWith(string, target, position)) {
    return fn(this);
  }
  return inverse(this);
}

export default endsWith;
