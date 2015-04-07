var Converter = require('showdown').converter;

var converter = new Converter();

module.exports = function markdown(options) {
  return converter.makeHtml(options.fn(this));
};
