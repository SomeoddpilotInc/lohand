import _ from 'lodash';
import indefiniteArticle from 'indefinite-article';

import endsWith from './endsWith';
import eq from './eq';
import every from './every';
import iter from './iter';
import markdown from './markdown';
import number from './number';
import lessThan from './lessThan';
import greaterThan from './greaterThan';
import possessive from './possessive';
import startsWith from './startsWith';

/**
 * Lohand
 * @module lohand
 */

const lodashHelpers = _([
  // string helpers
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
  'words',

  // array helpers
  'chunk',
  'compact',
  'drop',
  'dropRight',
  'first',
  'flatten',
  'last',
  'slice',
  'union',

  // collection helpers
  'at',
  'pluck',
  'sample',
  'shuffle',
  'size'
])
  .transform(function transformLodashHelpers(result, helperName) {
    result[helperName] = _[helperName];
  })
  .value();

export const helpers = _.extend(
  {
    indefiniteArticle,
    endsWith,
    encodeURIComponent,
    eq,
    every,
    iter,
    markdown,
    number,
    lessThan,
    greaterThan,
    possessive,
    startsWith
  },
  lodashHelpers
);

/**
 * Register helper
 *
 * @private
 *
 * @param {Handlebars} handlebars
 * @param {Function} helper
 * @param {string} helperName
 */
function registerHelper(handlebars, helper, helperName) {
  handlebars.registerHelper(helperName, helper);
}

/**
 * Register all helpers
 *
 * @param {Handlebars} handlebars
 */
export function registerAll(handlebars) {
  _.each(helpers, registerHelper.bind(this, handlebars));
}
