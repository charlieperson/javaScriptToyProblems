function longestImprovement (numbers) {
  function longestImprovement (numbers) {
    var streak = 0;
    var gettingThere = 0;
    numbers.forEach((num, i) => {
      if(num < numbers[i+1]) {
        gettingThere += 1
        if(gettingThere > streak) streak = gettingThere;
      } else {
        gettingThere = 0
      }
    })
    return streak;
  }
}
