function largestProductOfThree (array) {
  var sorted = array.sort(function(a,b) { return a - b; });

  var negs = sorted.filter(num => num < 0 )

  if(negs.length === sorted.length) {
    return negs[negs.length-1] * negs[negs.length-2] * negs[negs.length-3]
  }

  if(negs[0] * negs[1] > sorted[sorted.length-2] * sorted[sorted.length-3]) {
    return negs[0] * negs[1] * sorted[sorted.length-1]
  }

  return  sorted[sorted.length-1] *
          sorted[sorted.length-2] *
          sorted[sorted.length-3]
}
