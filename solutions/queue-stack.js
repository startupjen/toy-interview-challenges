//first iteration
const Stack = function() {
  const storage = []

  this.push = function(val){
    storage.push(val)
  }

  this.pop = function(){
    return storage.pop() || null
  }

  this.size = function(){
    return storage.length
  }
}

//first iteration
const Queue = function() {
  const inbox = new Stack()
  const outbox = new Stack()

  this.enqueue = function(val){
    inbox.push(val)
  }

  this.dequeue = function(){
    let dequeued = outbox.pop()
    if (!dequeued) {
      while (inbox.size() > 0) {
        outbox.push(inbox.pop())
      }
      dequeued = outbox.pop()
    }
    return dequeued
  }

  this.size = function(){
    return inbox.size() + outbox.size()
  }
}


//second iteration
const Stack = function() {
  const storage = []

  this.push = function(val){
    storage.push(val)
  }

  this.pop = function(){
    return storage.pop() || null
  }

  this.size = function(){
    return storage.length
  }
}

//second iteration
const Queue = function() {
  const inbox = new Stack()
  const outbox = new Stack()

  this.enqueue = function(val){
    inbox.push(val)
  }

  this.dequeue = function(){
    if ( !outbox.size() ) {
      while ( inbox.size() ) {
        outbox.push(inbox.pop())
      }
    }
    return outbox.pop()
  }

  this.size = function(){
    return inbox.size() + outbox.size()
  }
}


//notice there's hints in the stack names too
//point out differences between concat and doing this .apply
//be lazy, is there a way to do this that already exists?