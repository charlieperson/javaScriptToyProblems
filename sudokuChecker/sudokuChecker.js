function sudokuCheck (boardStr) {
  var solved = true;

  var rows = boardStr.split("\n")

  for(let i=0; i<rows.length; i++) {
    var currentRow = rows[i].split('')
    var numberStorage = []
    currentRow.forEach((digitString) => {
      numberStorage.push(parseInt(digitString))
    })
    if(numberStorage.sort().join('') !== '123456789') solved = false
  }

  var boxStorage = []
  for(let i=0; i<rows.length; i++) {
    var newRow = []
    rows[i].split('').forEach((char) => {
      newRow.push(parseInt(char))
    })
    boxStorage.push(newRow)
  }

  while(boxStorage[0].length) {
    var boxContent = []
    for(let i=0; i<boxStorage.length; i++) {
      boxContent.push(boxStorage[i].splice(0,3))
      if(boxContent.length === 3) {
        if([].concat.apply([], boxContent).sort().join('') !== '123456789') solved = false
        boxContent = []
      }
    }
  }
  return solved ? 'solved' : 'invalid'
}
