import _ from 'lodash';

function startsWith(string, target, {fn, inverse, hash: {position}}) {
  if (_.startsWith(string, target, position)) {
    return fn(this);
  }
  return inverse(this);
}

export default startsWith;
