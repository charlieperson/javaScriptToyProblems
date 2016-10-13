var bind = function(func, context){
  var args = Array.prototype.slice.call(arguments, 2);
  console.log('ARGS: ', args);
  return function(){
    return func.apply(context, args);
  };
};

Function.prototype.bind = function(context) {
  return function(context){
  };
};
