function countIslands (mapStr) {
  var currentArray = mapStr.split("\n")
  var lines = {}
  var count = 0;

  for(let i=0; i<currentArray.length; i++) {
    var lineStore = []
    var currentLine = currentArray[i]
    for(let j=0; j<currentLine.length; j++) {
      if(currentLine[j] === '.') {
        lineStore[j] = '.'
      } else {
        lineStore[j] = j
      }
    }
    lines[i] = lineStore
  }

  console.log(lines)
  function oneAtATime(lines) {
    var foundAnIsland = false;
    var previousLineLog = [];
    for(var prop in lines) {
      console.log('getting it: ', lines[prop])
      for(let i=0; i < lines[prop].length; i++) {
        console.log('getting it: ', lines[prop][i])
        if(lines[prop][i] !== '.') {
          previousLineLog.push(lines[prop][i])

        }
      }
      console.log('LOGGING IT UP: ', previousLineLog)
      previousLineLog = [];
    }

  }

  oneAtATime(lines)
  return count
}
