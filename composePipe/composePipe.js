var compose = function(){
  var mainArgs = arguments;
  return function() {
    var currentVal;
    for(var i=0; i<mainArgs.length; i++){
      console.log(mainArgs[i].call(null, arguments[0]))
      currentVal = mainArgs[i].call(null, arguments[0])
    }
    return currentVal
  }
};

var pipe = function(){
  //Your code here
};
