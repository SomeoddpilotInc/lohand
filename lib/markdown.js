var Converter = require('showdown').converter;

var converter = new Converter();

function markdown(options) {
  return converter.makeHtml(options.fn(this));
}

export default markdown;
