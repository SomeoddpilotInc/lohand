module.exports = function greaterThan(left, right, options) {
  return (left > right) ?
    options.fn(this) :
    options.inverse(this);
};
