import _ from 'lodash';

/**
 * Someone -> Someone’s
 * Alexis -> Alexis’
 * {{possessive maker.name}}
 *
 @ @param {string} string
 */
function possessive(string) {
  return string +
    ((_.endsWith(string, 's')) ?
      '’' :
      '’s');
}

export default possessive;
