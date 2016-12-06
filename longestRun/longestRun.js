function longestRun (string) {
  var arr = string.split('')
  var longestRun = 0;

  for(var i=0; i<arr.length; i++) {
    var char = arr[i]
    var tracker = i+1;
    while(char[tracker] === char) {
      tracker += 1
    }
  }
}
