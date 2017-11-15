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
  for (val of vals) {
    this.count++
    this.storage[this.count] = val
    var top = val
  }
  return top
}

Stack.prototype.pop = function () {
  if (this.count === 0) {
    var popped = null
  } else {
    var popped = this.storage[this.count]
    delete this.storage[this.count]
    this.count--
  }
  return popped
}
