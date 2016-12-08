function longestRun (string) {
  var best = [0,0]
  var currentStreak = 0
  var split = string.split('')
  split.forEach((item, index) => {
    if(best[1] - best[0] < currentStreak) {
      best = [index - currentStreak, index]
    }
    if(item == split[index+1]) {
      currentStreak += 1
    } else {
      currentStreak = 0
    }
  })
  return best
}
