module.exports = function eq(obj1, obj2, options) {
  if (obj1 === obj2) {
    return options.fn(this);
  }
  return options.inverse(this);
};
