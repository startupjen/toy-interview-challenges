//first iteration
function rockPaperPermutation (roundCount) {
  const rps = ['r','p','s']
  const rpsArr = []
    
  function recurse(perm) {
    for (let i=0;i<rps.length;i++) {
      if (roundCount && perm.length === roundCount) {
        rpsArr.push(perm)
        return
      } else if (roundCount > 0) {
        recurse(perm + rps[i])
      }
    }
  }
  recurse('')
  return rpsArr
}

//demo version
function rockPaperPermutation (roundCount) {
  const rps = ['r','p','s']
  const rpsArr = []
    
  function recurse(perm) {   
    if (roundCount && perm.length === roundCount) {
      rpsArr.push(perm)
      return
    } 
    
    for (let i=0;i<rps.length;i++) {
      if (roundCount > 0) {
        recurse(perm + rps[i])
      }
    }
  }

  recurse('')
  return rpsArr
}


//second iteration
function rockPaperPermutation (roundCount, perm = '', rpsArr = []) {
  const rps = ['r','p','s']
    
  if (roundCount && perm.length === roundCount) { rpsArr.push(perm) } 
  else if (roundCount > 0) {
    for (let option of rps) { rockPaperPermutation(roundCount, perm + option, rpsArr) }
  }
  return rpsArr
}


//third iteration
function rockPaperPermutation (roundCount, perm = '', rpsArr = []) {
  const rps = ['r','p','s']
    
  if (roundCount && perm.length === roundCount) { rpsArr.push(perm) } 
  else if (roundCount > 0) {
    rpsArr.forEach( (option) => { rockPaperPermutation(roundCount, perm + option, rpsArr) })
  }
  return rpsArr
}
