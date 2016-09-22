function charSum (str) {
  return str.split('').reduce(function(accum, item) {
    return Number.isInteger(parseInt(item)) ?
      accum + parseInt(item)
      : accum;
  }, 0);
}
