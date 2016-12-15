function toMilitary (time) {
  var array = time.split('')
  aOrP = array[array.length-2]

  if(aOrP === 'a') {
    array.splice(-2, 2);
    if(array[1] !== ':') {
      return array.join('')
    } else {
      return '0' + array.join('')
    }
  } else if (aOrP === 'p') {

  } else {

  }
}
