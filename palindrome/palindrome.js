function isPalindrome (str) {
  return str.split('').reverse().join('').replace(/[^A-Za-z0-9]/g,'').toLowerCase() === str.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
}
