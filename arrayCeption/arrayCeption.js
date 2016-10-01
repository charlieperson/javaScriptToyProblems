function arrayception (array) {
  if(!(Array.isArray(array))) return 0; // Not an array? return 0;
  for(var i=0; i<array.length; i++) {  // iterate through array
    var item = array[i];              // set current item to item
    if((Array.isArray(item))) return 1 + arrayception(item);
  }
  return 0;
}
