function binarySearch (array, target) {
  console.log('===================================')
  console.log('array: ', array, ' target: ', target)
  var solution = -1;
  var arr = array;
  var lastIndex = array.length-1;
  var toop = [0, lastIndex]

  while(arr.length > 0) {
    currentIndex = Math.floor(arr.length/2);
    if(target === arr[currentIndex]) solution = currentIndex;
    if(target < arr[currentIndex]) {
      arr = arr.slice(0, currentIndex)
      toop[1] = currentIndex
    }
    if(target > arr[currentIndex]) {
      arr = arr.slice(currentIndex)
      toop[0] = currentIndex
    }
  }

  return solution

}
