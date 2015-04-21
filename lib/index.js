import _ from 'lodash';
import indefiniteArticle from 'indefinite-article';

import endsWith from './endsWith';
import eq from './eq';
import every from './every';
import iter from './iter';
import markdown from './markdown';
import numeral from './numeral';
import lessThan from './lessThan';
import greaterThan from './greaterThan';
import possessive from './possessive';
import startsWith from './startsWith';

const stringHelperWhitelist = [
  'camelCase',
  'capitalize',
  'deburr',
  'kebabCase',
  'pad',
  'padLeft',
  'padRight',
  'parseInt',
  'repeat',
  'snakeCase',
  'startCase',
  'trim',
  'trimLeft',
  'trimRight',
  'trunc',
  'unescape',
  'words'
];

const stringHelpers = _(stringHelperWhitelist)
  .transform(function (result, helperName) {
    result[helperName] = _[helperName];
  })
  .value();

const arrayHelperWhitelist = [
  'chunk',
  'compact',
  'drop',
  'dropRight',
  'first',
  'flatten',
  'last',
  'slice',
  'union'
];

const arrayHelpers = _(arrayHelperWhitelist)
  .transform(function (result, helperName) {
    result[helperName] = _[helperName];
  })
  .value();

const collectionHelperWhitelist = [
  'at',
  'pluck',
  'sample',
  'shuffle',
  'size'
];

const collectionHelpers = _(collectionHelperWhitelist)
  .transform(function (result, helperName) {
    result[helperName] = _[helperName];
  })
  .value();

const helpers = _.extend(
  {
    indefiniteArticle,
    endsWith,
    encodeURIComponent,
    eq,
    every,
    iter,
    markdown,
    numeral,
    lessThan,
    greaterThan,
    possessive,
    startsWith
  },
  stringHelpers,
  collectionHelpers,
  arrayHelpers
);

module.exports = {
  helpers: helpers,
  registerAll: function (handlebars) {
    _.each(helpers, function (helper, helperName) {
      handlebars.registerHelper(helperName, helper);
    });
  }
};
