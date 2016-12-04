function sudokuCheck (boardStr) {
  var solved = true;
  var rows = boardStr.split("\n")
  console.log('ROWS: ', rows)
  for(let i=0; i<rows.length; i++) {
    var currentRow = rows[i].split('')
    var numberStorage = []
    currentRow.forEach((digitString) => {
      numberStorage.push(parseInt(digitString))
    })
    if(numberStorage.sort().join('') !== '123456789') solved = false
  }

  return solved
}
