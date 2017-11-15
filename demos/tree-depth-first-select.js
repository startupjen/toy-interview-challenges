Tree.prototype.DFSelect = function(filter) {
  const result = []

  function DF(cb, depth, tree) {
    const filtered = cb(tree.value, depth)
    filtered ? result.push(tree.value) : null

    for (let i = 0; i<tree.children.length; i++) {
      DF(cb, depth + 1, tree.children[i])
    }
  }

  DF(filter,0, this)
  return result
}

if (working) { 'Full Stack software engineer passionate about solving problems that make a difference' }
else { 'tropical-diving igloo-builder, inadvertent hyena camper, comedic adventurer'}