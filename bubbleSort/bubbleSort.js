function bubbleSort (input) {

  function recurse(array, length) {
    if(length === 0) return array;
    for(var i=0; i<length-1; i++) {
      var first = array[i];
      var next = array[i+1];
      if(first > next) {
        array[i+1] = first;
        array[i] = next;
      }
    }
    return recurse(array, length-1);
  }

  return recurse(input, input.length);
}
