import _ from 'lodash';

export default _([
  // string helpers
  'camelCase',
  'capitalize',
  'deburr',
  'kebabCase',
  'pad',
  'padLeft',
  'padRight',
  'parseInt',
  'repeat',
  'snakeCase',
  'startCase',
  'trim',
  'trimLeft',
  'trimRight',
  'trunc',
  'unescape',
  'words',

  // array helpers
  'chunk',
  'compact',
  'drop',
  'dropRight',
  'first',
  'flatten',
  'last',
  'slice',
  'union',

  // collection helpers
  'at',
  'pluck',
  'sample',
  'shuffle',
  'size'
])
  .transform(function transformLodashHelpers(result, helperName) {
    result[helperName] = _[helperName];
  })
  .value();
