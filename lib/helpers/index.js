import _ from 'lodash';
import indefiniteArticle from 'indefinite-article';
import endsWith from './endsWith';
import eq from './eq';
import every from './every';
import iter from './iter';
import markdown from './markdown';
import number from './number';
import lessThan from './lessThan';
import greaterThan from './greaterThan';
import possessive from './possessive';
import startsWith from './startsWith';
import lodashHelpers from './lodash';

export default _.extend(
  {
    indefiniteArticle,
    endsWith,
    encodeURIComponent,
    eq,
    every,
    iter,
    markdown,
    number,
    lessThan,
    greaterThan,
    possessive,
    startsWith
  },
  lodashHelpers
);

