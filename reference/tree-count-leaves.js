//pseudocode
Tree.prototype.countLeaves = function () {
  //initialize variables

  //go depth thru the tree
  
    //if theres a node with no children
      //increment leafNodeCounter
    
    //recurse down

  //return counter
}
//mention importance of doing whiteboarding problems, that things are more wild now
//at first i think about how i would do it, as if i was manipulating and moving the stuff around
//don't worry about the details or how to do it quite yet
//then i methodically break it up and bring it down to code level
//mention for, forEach, for...of, for...in

//first implementation
Tree.prototype.countLeaves = function () {
  let leafNodeCounter = 0
  
  function leafCounter(tree) {
    tree.children.length === 0 ? leafNodeCounter++ : null
    for (let child of tree.children) {
      leafCounter(child)
    }
  }
  leafCounter(this)
  return leafNodeCounter
}


//second implementation
Tree.prototype.countLeaves = function (leafNodeCounter = 0) {
  this.children.length === 0 ? leafNodeCounter++ : null
  for (let child of this.children) {
    leafNodeCounter = child.countLeaves(leafNodeCounter)
  }
  return leafNodeCounter
}

//third implementation
Tree.prototype.countLeaves = function (leafNodeCounter = 0) {
  this.children.length === 0 ? leafNodeCounter++ : null
  this.children.forEach( (child) => leafNodeCounter = child.countLeaves(leafNodeCounter) )
  return leafNodeCounter
}

//third implementation
Tree.prototype.countLeaves = function (leafNodeCounter = 0) {
  this.children.length === 0 ? leafNodeCounter++ : null
  this.children.forEach( (child) => leafNodeCounter = child.countLeaves(leafNodeCounter) )
  return leafNodeCounter
}