//second iteration
function resize(newSize){
  const allValues = []
  for (let bucket of storage) {
    if ( Array.isArray(bucket) ) {
      for (let tuple of bucket) {
        Array.isArray(tuple) ? allValues.push(tuple) : null
      }
    }
  }
  storage = []
  storageLimit = newSize
  size = 0
  
  for (let tuple of allValues) {
    Array.isArray(tuple) ? result.insert(tuple[0],tuple[1]) : null
  }
}