var _ = require('lodash');

function testSpecificCases(word, resolve) {
  if (_.includes(["honest", "hour", "hono"], word.toLowerCase())) {
    resolve('an');
  }
}

function testForSingleCharacter(word, resolve) {
  if (word.length === 1) {
    resolve(
      ('aedhilmnorsx'.includes(word.toLowerCase())) ?
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

function testForCapitalWords(word, resolve) {
  // Capital words which should likely be preceeded by 'an'
  if (word.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) {
    resolve('an');
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

function testSpecialCaptialWords(word, resolve) {
  if (word.toLowerCase().match(/^u[nk][aieo]/)) {
    resolve('a');
  }
}

function testYCases(word, resolve) {
  if (word.toLowerCase().match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)) {
    resolve('an');
  }
}

const tests = [
  testSpecificCases,
  testForSingleCharacter,
  testForCapitalWords,
  testForSpecialVowelCases,
  testSpecialCaptialWords,
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
