//pseudocode it out
Tree.prototype.map = function (callback) {
  const mappedGroot = new Tree(callback(this.value))

  //recurse depth first
  function recurse(this, mapTree) {
    //iterate thru children
      //create a newChild with the mapped value
      //add that to mapTree children
      //recurse dat kid with its original copy
  }

  recurse(this, mappedGroot)

  return mappedGroot
}


//first iteration
Tree.prototype.map = function (callback) {
  const mappedGroot = new Tree(callback(this.value))
  
  function recurse( originalTree, mapTree ) {
    for (let originalChild of originalTree.children) {
      mapValue = callback(originalChild.value)
      let mapChild = new Tree(mapValue)
      mapTree.children.push(mapChild)
      recurse(originalChild, mapChild)
    }
  }
  recurse(this, mappedGroot)
  
  return mappedGroot
}


//second iteration
Tree.prototype.map = function (callback) {
  const mappedGroot = new Tree(callback(this.value))
  
  for (let originalChild of this.children) {
    const mapValue = callback(originalChild.value)
    mappedGroot.children.push(originalChild.map(callback))
  }
  return mappedGroot
}

//third iteration
Tree.prototype.map = function (callback) {
  const mappedGroot = new Tree(callback(this.value))
  mappedGroot.children = this.children.map( child => child.map(callback) )
  return mappedGroot
}

