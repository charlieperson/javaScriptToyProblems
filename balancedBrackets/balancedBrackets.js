function isBalanced (str) {
  var result = true;
  var brackets = ['(', ')', '[', ']', '{', '}']
  var bareBones = []

  var inputToArray = str.split('');

  for(var i=0; i<inputToArray.length; i++) {
    var char = inputToArray[i]
    if(brackets.indexOf(char) !== -1) bareBones.push(char)
  }

  var open   = []

  bareBones.forEach(brack => {
    if(brack === '(' || brack === '[' || brack === '{') {
      open.push(brack)
    } else {
      if(brack === ')') {
        var mostRecentlyOpened = open.pop()
        if(mostRecentlyOpened !== '(') result = false;
      }
      if(brack === ']') {
        var mostRecentlyOpened = open.pop()
        if(mostRecentlyOpened !== '[') result = false;
      }
      if(brack === '}') {
        var mostRecentlyOpened = open.pop()
        if(mostRecentlyOpened !== '{') result = false;
      }
    }
  })

  if(open.length > 0) result = false;

  return result

}
