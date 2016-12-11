function zeroSum (numbers) {
  if(numbers.filter((num) => num === 0).length >= 2) return true

  numbers = eliminateDuplicates(numbers)
  var status = false;
  var clone = []
  for(var i=0; i<numbers.length; i++) {
    clone.push(Math.abs(numbers[i]))
  }
  var sorted = clone.sort()
  sorted.forEach((num, index) => {
    if(num === sorted[index+1]) status = true
  })

  return status
}

function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
