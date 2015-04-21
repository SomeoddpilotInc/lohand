/**
 * Someone -> Someone's
 * Alexis -> Alexis'
 * {{possessive maker.name}}
 *
 @ @param {string} str
 */
function possessive(str) {
  return str + (str.charAt(str.length - 1) === 's' ? '\’' : '\’s');
}

export default possessive;
