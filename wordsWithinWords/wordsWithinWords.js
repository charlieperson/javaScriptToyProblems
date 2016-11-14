function nestedWordCount (wordList) {
  var storage = {}
  wordList.forEach(function(word) {
    storage[word] = 0;
    wordList.forEach(function(subWord) {
      if(word.indexOf(subWord) !== -1) storage[word] += 1
    })
  })

  var bigBoy = 0;
  var solution;
  for(var prop in storage) {
    if (storage[prop] > bigBoy) {
      bigBoy = storage[prop]
      solution = prop
    }
  }
  return solution
}
