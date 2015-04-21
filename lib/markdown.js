import {converter as Converter} from 'showdown';

var converter = new Converter();

function markdown(options) {
  return converter.makeHtml(options.fn(this));
}

export default markdown;
