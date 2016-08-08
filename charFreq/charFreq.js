function characterFrequency (string) {
  var solution = [];
  var usedLetters = [];
  for(var i=0; i<string.length; i++) {
    var count = 0;
    var currentLetter = string[i];
    if(usedLetters.indexOf(currentLetter) === -1) {
      for(var j=0; j < string.length; j++) {
        if(string[j] === currentLetter) count += 1;
        if(j === string.length-1) solution.push([currentLetter, count]);
        usedLetters.push(currentLetter);
      }
    }
  }

  solution = solution.sort(function(a,b) {
    if(a[1] !== b[1]){
      return (a[1] > b[1]) ? -1 : 1;
    } else {
      return (a[0] < b[0]) ? -1 : 1;
    }
    return 0;
  });

  return solution;
}
