(function (factory) {
  !(typeof exports === 'object' && typeof module !== 'undefined') && typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  var _ = require('lodash');

  var stringHelperWhitelist = ['camelCase', 'capitalize', 'deburr', 'kebabCase', 'pad', 'padLeft', 'padRight', 'parseInt', 'repeat', 'snakeCase', 'startCase', 'trim', 'trimLeft', 'trimRight', 'trunc', 'unescape', 'words'];

  var stringHelpers = _(stringHelperWhitelist).transform(function (result, helperName) {
    result[helperName] = _[helperName];
  }).value();

  var arrayHelperWhitelist = ['chunk', 'compact', 'drop', 'dropRight', 'first', 'flatten', 'last', 'slice', 'union'];

  var arrayHelpers = _(arrayHelperWhitelist).transform(function (result, helperName) {
    result[helperName] = _[helperName];
  }).value();

  var collectionHelperWhitelist = ['at', 'pluck', 'sample', 'shuffle', 'size'];

  var collectionHelpers = _(collectionHelperWhitelist).transform(function (result, helperName) {
    result[helperName] = _[helperName];
  }).value();

  var customHelpersWhitelist = ['encodeURIComponent', 'endsWith', 'eq', 'every', 'iter', 'markdown', 'numeral', 'lessThan', 'greaterThan', 'possessive', 'startsWith'];

  var customHelpers = _(customHelpersWhitelist).transform(function (result, helperName) {
    result[helperName] = require('./' + helperName);
  }).value();

  var helpers = _.extend({
    indefiniteArticle: require('indefinite-article')
  }, stringHelpers, customHelpers, collectionHelpers, arrayHelpers);

  module.exports = {
    helpers: helpers,
    registerAll: function registerAll(handlebars) {
      _.each(helpers, function (helper, helperName) {
        handlebars.registerHelper(helperName, helper);
      });
    }
  };
});
//# sourceMappingURL=./index.js.map