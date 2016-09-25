function max (numbers) {
  return numbers.reduce(function(accum, item){
   return item > accum ? item : accum;
 });
}
