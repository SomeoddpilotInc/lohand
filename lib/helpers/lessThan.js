function lessThan(left, right, {fn, inverse}) {
  return (left < right) ?
    fn(this) :
    inverse(this);
}

export default lessThan;
