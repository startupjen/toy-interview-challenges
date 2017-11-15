Tree.prototype.map = function(callback) {
  const mappedGroot = new Tree(callback(this.value))


  //recurse depth first
  function recurse(originalTree, mapTree) {
    //iterate thru children
    for (let originalChild of originalTree.children) {
      mapValue = callback(originalChild.value)
      let mapChild = new Tree(mapValue)
      mapTree.children.push(mapChild)
      recurse(originalChild, mapChild)
    }
      //create a new Child with the mapped value
      //add that to mapTree children
      //recurse dat kid with its original copy
  }


  recurse(this, mappedGroot)

  return mappedGroot
}