function zipSum (xs, ys) {
  var smallest;
  xs.length < ys.length ? smallest = xs : smallest = ys;
  return smallest.map((item, i) => {
    return xs[i] + ys[i];
  })
}
