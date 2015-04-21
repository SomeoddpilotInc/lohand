/**
 * @param {*} obj1 - first object to compare
 * @param {*} obj2 - second object to compare
 * @param {Object} context - handlebars context
 * @param {Function} context.fn - normal template function
 * @param {Function} context.inverse - inverse template function
 */
function eq(obj1, obj2, {fn, inverse}) {
  if (obj1 === obj2) {
    return fn(this);
  }
  return inverse(this);
}

export default eq;
