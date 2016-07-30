Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(arr.indexOf(this[i]) === -1) {
      arr.push(this[i]);
    }
  }
  return arr;
};

commonCharacters = function(string1, string2){
  var solution = '';
  var array1 = string1.replace(/ /g,'').split('').unique();
  var array2 = string2.replace(/ /g,'').split('').unique();
  for(var i=0; i<array1.length; i++) {
    if(array2.indexOf(array1[i]) !== -1) solution += array1[i];
  }
  return solution;
};
