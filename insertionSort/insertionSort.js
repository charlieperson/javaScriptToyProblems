Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function insertionSort (array) {
  var sorted = [];
  function backItUp(obj) {
    if(!sorted.length) return sorted.push(obj);
    for(var j=sorted.length-1; j>=0; j--) {
      if(obj.value >= sorted[j].value) {
        return sorted.insert(j+1, obj);
      }
      if(!j) sorted.unshift(obj);
    }
  }

  for(var i=0; i<array.length; i++) backItUp(array[i]);
  return sorted;
}
