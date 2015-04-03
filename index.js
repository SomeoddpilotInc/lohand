const _ = require('lodash');

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

const customHelpersWhitelist = [
  'encodeURIComponent',
  'endsWith',
  'eq',
  'iter',
  'markdown',
  'possessive',
  'startsWith',
  'urlify'
];

const customHelpers = _(customHelpersWhitelist)
  .transform(function (result, helperName) {
    result[helperName] = require('./lib/' + helperName);
  })
  .value();

const helpers = _.extend(
  {
    'title-case': stringHelpers.startCase
  },
  stringHelpers,
  customHelpers
);

module.exports = {
  helpers: helpers,
  registerAll: function (handlebars) {
    helpers.forEach(function (helper, helperName) {
      handlebars.registerHelper(helperName, helper);
    });
  }
};
