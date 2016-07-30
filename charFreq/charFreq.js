function characterFrequency (string) {
  var keyVals = [];
  var usedLetters = [];
  for(var i=0; i<string.length; i++) {
    var count = 0;
    var currentLetter = string[i];
    if(usedLetters.indexOf(currentLetter) === -1) {
      for(var j=0; j < string.length; j++) {
        if(string[j] === currentLetter) count += 1;
        if(j === string.length-1) keyVals.push({letter: currentLetter, count: count});
        usedLetters.push(currentLetter);
      }
    }
  }
  console.log('before first sort', JSON.stringify(keyVals));

  keyVals = keyVals.sort(function(a,b) {
    if(a.count > b.count) return -1;
    if(a.count < b.count) return 1;
    return 0;
  });

  console.log('after first sort', JSON.stringify(keyVals));

  keyVals = keyVals.sort(function(a,b) {
    if(a.count === b.count && a.letter < b.letter) {
      return -1;
    }
  });

  console.log('after second sort', JSON.stringify(keyVals));


  return keyVals;
}
