const _ = require('lodash');

const stringHelperWhitelist = [
  'camelCase',
  'capitalize',
  'deburr',
  'endsWith',
  'kebabCase',
  'pad',
  'padLeft',
  'padRight',
  'parseInt',
  'repeat',
  'snakeCase',
  'startCase',
  'startsWith',
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
  'urlify'
];

const customHelpers = _(customHelpersWhitelist)
  .transform(function (result, helperName) {
    result[helperName] = require('./lib/' + helperName);
  })
  .value();

const helpers = _.extend(
  {},
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
