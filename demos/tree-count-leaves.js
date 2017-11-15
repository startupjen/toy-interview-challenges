Tree.prototype.countLeaves = function() {
  //initialize variables
  let leafCounter = 0

  //go depth thru the tree
  function leafCounter(tree) {
    //if theres a node with no children
    tree.children.length === 0 ? leafCounter++ : null
      //increment leafCounter
    for (let child of tree.children) {
      leafCounter(child)
    }
    //recurse down otherwise
  }
  //return counter
  return leafCounter
}