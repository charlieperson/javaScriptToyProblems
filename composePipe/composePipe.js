var compose = function(...args){
  return function(arg) {
    return [...args].reduceRight(function(accum, currentFunc) {
      return currentFunc(accum)
    }, arg)
  }
};

var pipe = function(...args){
  return function(arg) {
   return [...args].reduce(function(accum, currentFunc){
     return currentFunc(accum)
   }, arg)
  }
};
