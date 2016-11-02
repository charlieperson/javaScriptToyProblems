var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value)
  };

  this.pop = function(){
    return storage.pop()
  };

  this.size = function(){
    return storage.length
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(item){
    inbox.push(item)
  };

  this.dequeue = function(){
    while(inbox.size() > 0) {
      outbox.push(inbox.pop())
    }
    var temp = outbox.pop()
    while(outbox.size() > 0) {
      inbox.push(outbox.pop())
    }
    return temp
  };

  this.size = function(){
    return inbox.size()
  };
};
