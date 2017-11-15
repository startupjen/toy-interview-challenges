//original working code - use subfunction with closure
Tree.prototype.DFSelect = function(filter) {
  const result = []
  
  function DF (cb, depth, tree) {
    const filtered = cb(tree.value, depth)
    filtered ? result.push(tree.value) : null
    
    for (let i=0; i<tree.children.length;i++) {
      DF(cb, depth + 1, tree.children[i])
    }
  }
  
  DF(filter, 0, this)
  return result
};

//second iteration - no subfunction
Tree.prototype.DFSelect = function(filter, depth = 0, result = []) {      
  const filtered = filter(this.value, depth)
  filtered ? result.push(this.value) : null
    
  for (let i=0; i<this.children.length;i++) {
    result = this.children[i].DFSelect(filter, depth + 1, result)
  }
  return result
};

//third iteration - with for of
Tree.prototype.DFSelect = function(filter, depth = 0, result = []) {      
  const filtered = filter(this.value, depth)
  filtered ? result.push(this.value) : null

  for (const child of this.children) {
    result = child.DFSelect(filter, depth + 1, result)
  }
  return result
}

//fourth iteration - super line condensed
Tree.prototype.DFSelect = function(filter, depth = 0, result = []) {      
  filter(this.value, depth) ? result.push(this.value) : null
  this.children.forEach( (child) => result = child.DFSelect(filter, depth + 1, result))
  return result
}