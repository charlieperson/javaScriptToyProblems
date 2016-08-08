function firstNonRepeatedCharacter (string) {
  for(var i=0; i<string.length; i++) {
    var currentLetter = string[i];
    var count = 0;
    for(var j=0; j<string.length; j++) {
      if(string[j] === currentLetter) count += 1;
    }
    if(count < 2) return currentLetter;
  }
  return 'sorry';
}
