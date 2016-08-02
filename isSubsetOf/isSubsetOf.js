Array.prototype.isSubsetOf = function(bigArray) {
  var uniqueSub = this.unique();
  var uniqueBig = bigArray.unique();
  var status = true;
  this.forEach(function(item) {
    if(bigArray.indexOf(item) === -1) status = false;
  });

  return status;

};

Array.prototype.unique = function() {
  var solution = [];
  for(var i=0; i<this.length; i++) {
    if(solution.indexOf(this[i]) === -1) solution.push(this[i]);
  }
  return solution;
};
