//first iteration
function powerSet (string) {
  const result = ['']
  const histogram = {}
  
  string.split('').forEach( (char) => histogram[char] = true)
  const strArr = Object.keys(histogram).sort()
  
  function recurse(arr, perm){
    for(let i=0; i<arr.length; i++) {
      result.push(perm+arr[i]);
      recurse(arr.slice(i+1), perm+arr[i])
    }
  }
  
  recurse(strArr, '')
  return result
}

//second iteration
function powerSet (string) {
  const result = ['']
  const histogram = {}
  
  const arr = Array.from(new Set(string)).sort();
  
  function recurse(arr, perm){
    for(let i=0; i<arr.length; i++) {
      result.push(perm+arr[i]);
      recurse(arr.slice(i+1), perm+arr[i])
    }
  }
  
  recurse(strArr, '')
  return result
}


