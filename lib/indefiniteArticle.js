var _ = require('lodash');

const vowels = ['a', 'e', 'i', 'o', 'u'];

module.exports = function indefiniteArticle(string) {
  if (!string || !string.length) {
    return 'a';
  }
  return (
    _.includes(vowels, string.charAt(0).toLowerCase())) ?
    'an' :
    'a';
};
