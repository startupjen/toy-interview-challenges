
//first iteration
var Stack = function(initialValue = null) {
  this.storage = {}
  this.count = 0
  initialValue ? this.storage[++this.count] = initialValue : null
}

Stack.prototype.size = function() {
  return this.count
}

Stack.prototype.peek = function() {
  return this.storage[this.count] || null
}

Stack.prototype.push = function(...vals) {
  for (val of vals) {
    this.count++
    this.storage[this.count] = val
    var top = val
  }
  return top
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    var popped = null
  } else {
    var popped = this.storage[this.count]
    delete this.storage[this.count]
    this.count--
  }
  return popped
}


//second iteration
var Stack = function(initialValue = null) {
  this.storage = {}
  this.count = 0
  initialValue ? this.storage[++this.count] = initialValue : null
}

Stack.prototype.size = function() {
  return this.count
}

Stack.prototype.peek = function() {
  return this.storage[this.count] || null
}

Stack.prototype.push = function(...vals) {
  for (val of vals) {
    var top = this.storage[++this.count] = val
  }
  return top
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    var popped = null
  } else {
    var popped = this.storage[this.count--]
  }

  return popped
}


//third iteration
const Stack = function(initialValue = null) {
  this.storage = {}
  this.count = 0
  initialValue ? this.storage[++this.count] = initialValue : null
}

Stack.prototype.size = function() {
  return this.count
}

Stack.prototype.peek = function() {
  return this.storage[this.count] || null
}

Stack.prototype.push = function(...vals) {
  return vals.reduce( (acc, val) => this.storage[++this.count] = val, 0)
}

Stack.prototype.pop = function() {
  return popped = this.count === 0 ? null : this.storage[this.count--]
}

