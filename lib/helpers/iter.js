import _ from 'lodash';

function reduceContext(fn, memo, contextItem, index) {
  return memo + fn(
    _.extend(
      {},
      contextItem,
      {
        i: index,
        iPlus1: index + 1
      }
    )
  );
}

function iter(context, {fn, inverse}) {
  if (context && context.length > 0) {
    return _.reduce(context, reduceContext.bind(this, fn), '');
  }
  return inverse(this);
}

export default iter;
