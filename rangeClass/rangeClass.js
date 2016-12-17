var Range = function(start, end, step) {
  this.storage = []

  if(!end) { this.storage = [start] } else {
    if(!step && start < end) step = 1
    if(!step && start > end) step = -1
    console.log('STEP: ', step)

    for(var i=start; i<=end; i += step) this.storage.push(i)
  }
};

Range.prototype.size = function () {
  return this.storage.length
};

Range.prototype.each = function (callback) {
  return this.storage.map((item) => {
    return callback(item)
  })
};

Range.prototype.includes = function (val) {
  if(this.storage.indexOf(val) === -1) return false
  return true
};
