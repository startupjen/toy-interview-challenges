// first working implementation
Tree.prototype.BFSelect = function(filter) {
  let queue = new Queue()
  const result = []
  let depth = 0
  //invoke filter function & add to result array if true
  let filtered = filter(this.value, 0)
  filtered ? result.push(this.value) : null
  
  function BF(tree,depth) {
    //iterate over children of node & add them to queue
    let lastBreadthNode = tree.children[tree.children.length-1]
    
    for (let i=0; i<tree.children.length;i++) {
      queue.enqueue(tree.children[i])
    }
    
    let node = queue.dequeue()
    
    while (node !== undefined) {
      let filtering = filter(node.value, depth)
      filtering ? result.push(node.value) : null
        
      if (node === lastBreadthNode) {
        lastBreadthNode = node.children[node.children.length-1]
        depth++
      }
      
      for (let i=0; i<node.children.length;i++) {
        queue.enqueue(node.children[i])
      }
      console.log('result is ', result)
      node = queue.dequeue()
    }
  }
  
  BF(this,1)
  return result
};


// second iteration
Tree.prototype.BFSelect = function(filter) {
  let queue = new Queue()
  const result = []
  let depth = 0
  let lastBreadthNode = this
  queue.enqueue(this)
  
  let node = queue.dequeue()
    
  while (node !== undefined) {
    let filtering = filter(node.value, depth)
    filtering ? result.push(node.value) : null
    if (node === lastBreadthNode) {
      lastBreadthNode = node.children[node.children.length-1]
      depth++
    }
    for (let i=0; i<node.children.length;i++) {
      queue.enqueue(node.children[i])
    }
    node = queue.dequeue()
  }
  
  return result
}

//third iteration
Tree.prototype.BFSelect = function(filter) {
  let queue = new Queue()
  const result = []
  let depth = 0
  let lastBreadthNode = node = this
    
  while (node !== undefined) {
    let filtered = filter(node.value, depth)    
    filtered ? result.push(node.value) : null
    if (node === lastBreadthNode) {
      lastBreadthNode = node.children[node.children.length-1]
      depth++
    }
    for (let child of node.children) { queue.enqueue(child) }
    node = queue.dequeue()
  }
  return result
}

//fourth iteration
Tree.prototype.BFSelect = function(filter) {
  let queue = new Queue()
  const result = []
  let depth = 0
  let lastBreadthNode = node = this
  //dequeue
  while ( node ) {
    //filter the node
    filter(node.value, depth) ? result.push(node.value) : null
    if (node === lastBreadthNode) {
      lastBreadthNode = node.children[node.children.length-1]
      depth++
    }
    //add children
    for (let child of node.children) { queue.enqueue(child) }
    node = queue.dequeue()
  }

  return result
}

//jeff's iteration
Tree.prototype.BFSelect = function(filter) {
  const queue = new Queue()
  const result = []
  let depth = 0
  let currentNode = queue.enqueue({‘node’: this, ‘depth’: depth})

  while (currentNode = queue.dequeue()) {
    currentNode.node.children.forEach(child => queue.enqueue({‘node’: child, ‘depth’: currentNode.depth + 1}))
    filter(currentNode.node.value, currentNode.depth) ? result.push(currentNode.node.value) : null
  }
 
  return result
 };


