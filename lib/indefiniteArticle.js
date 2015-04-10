var _ = require('lodash');

function testSpecificCases(word, resolve) {
  _.each(["honest", "hour", "hono"], function (testCase) {
    if (word.toLowerCase().indexOf(testCase) >= 0) {
      resolve('an');
      return false;
    }
  });
}

function testForSingleCharacter(word, resolve) {
  if (word.length === 1) {
    resolve(
      (_.includes('aedhilmnorsx'.split(), word.toLowerCase())) ?
        'an' :
        'a'
    );
  }
}

function testFirstCharacterForVowel(word, resolve) {
  if (
    _.includes(
      "aeiou".split(''),
      word.toLowerCase().charAt(0)
    )
  ) {
    resolve("an");
  }
}

function testForSpecialVowelCases(word, resolve) {
  // Special cases where a word that begins with a vowel should be preceeded by 'a'
   _.each([
     /^e[uw]/,
     /^onc?e\b/,
     /^uni([^nmd]|mo)/,
     /^u[bcfhjkqrst][aeiou]/
   ], function (regex) {
     if (word.toLowerCase().match(regex)) {
       resolve('a');
       return false;
     }
  });
}

function testYCases(word, resolve) {
  if (word.toLowerCase().match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)) {
    resolve('an');
  }
}

const tests = [
  testSpecificCases,
  testForSingleCharacter,
  testForSpecialVowelCases,
  testFirstCharacterForVowel,
  testYCases
];

module.exports = function indefiniteArticle(string) {
  // The first word
  const match = /\w+/.exec(string);

  if (!match || !match.length) {
    return 'an';
  }

  const word = match[0];

  var value = null;

  function resolve(resolvedValue) {
    value = resolvedValue;
  }

  for (var i = 0; i < tests.length && !value; i++) {
    tests[i](word, resolve);
  }
  return value || 'a';
};
