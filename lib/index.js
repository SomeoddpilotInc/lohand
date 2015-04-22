import helpers from './helpers';

/**
 * Lohand
 * @module lohand
 */

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

export {
  registerAll,
  helpers
};
