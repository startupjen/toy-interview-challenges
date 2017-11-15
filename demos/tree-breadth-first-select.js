Tree.prototype.BFSelect = function(filter) {
  let queue = new Queue()
  const result = []
  let depth = 0
  let lastBreadthNode = node = this

  //dequeue the node
  while (node) {
  //filter the node
    let filtered = filter(node.value, depth)
    filtered ? result.push(node.value) : null

    if (node === lastBreadthNode) {
      lastBreadthNode = node.children[node.children.length-1]
      depth++
    }
  //add node's children to queue
  for (let child of node.children) {
    queue.enqueue(child)
  }

    node = queue.dequeue()
  }
  return result
}