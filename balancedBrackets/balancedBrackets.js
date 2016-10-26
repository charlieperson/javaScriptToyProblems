function isBalanced (str) {
  var parens   = 0
  var brackets = 0
  var squigles = 0

  var inputToArray = str.split('');

  for(var i=0; i<inputToArray.length; i++) {
    var char = inputToArray[i]
    if(parens < 0 || brackets < 0 || squigles < 0) return false

    if(char === '(') parens += 1;
    if(char === ')') parens -= 1;

    if(char === '[') brackets += 1;
    if(char === ']') brackets -= 1;

    if(char === '{') squigles += 1;
    if(char === '}') squigles -= 1;

  }

  return(squigles === 0 && parens === 0 && brackets === 0)

}
