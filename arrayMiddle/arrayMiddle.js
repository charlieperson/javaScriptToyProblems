function middle (numbers) {
  var half = numbers.length/2;
  if(half % 1 === 0) {
    return (numbers[half-1] + numbers[half])/2;
  } else {
    half = Math.floor(half);
    return numbers[half];
  }
}
