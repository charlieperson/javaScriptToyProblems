function isBalanced (str) {
  var result = true;
  var parens   = [0,0]
  var brackets = [0,0]
  var squigles = [0,0]

  var inputToArray = str.split('');

  inputToArray.forEach(char => {
    if(char === '(') parens[0] += 1;
    if(char === ')') parens[1] += 1;

    if(char === '[') brackets[0] += 1;
    if(char === ']') brackets[1] += 1;

    if(char === '{') squigles[0] += 1;
    if(char === '}') squigles[1] += 1;
  })

  if(parens[0] !== parens[1]) result = false;
  if(brackets[0] !== brackets[1]) result = false;
  if(squigles[0] !== squigles[1]) result = false;

  return result
}
