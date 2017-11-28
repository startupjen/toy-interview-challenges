//first iteration
function isBalanced (str) {
  const stack = []
  console.log('new str is ', str)
  let counter = 0
  for (let char of str) {
    console.log('index is ', counter++)
    console.log('char is ', char)
    if (char === '}') {
      if ( stack[stack.length-1] === '{') {
        stack.pop()
      } else {
        console.log('return false')
        return false
      }
    } else if (char === ')') {
      if (stack[stack.length-1] === '(') {
        stack.pop()
      } else {
        console.log('return false')
        return false
      }
    } else if (char === ']') {
      if (stack[stack.length-1] === '[') {
        stack.pop()
      } else {
        console.log('return false')
        return false
      }
    } else if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    }
    console.log('stack now is ', stack)
  }
  
  //if at the end there's no brackets in there, return true
  
  if ( stack.length === 0 || stack.findIndex( (char) => char.match(/[\(\)\[\]\{\}]/) ) === -1 ) {
    console.log('return true outside')
    return true
  } else {
    console.log('return false outside')
    return false
  }
  //iterate thru str
    //if char is a closed bracket
      //peek and see if the first thing to pop off is what you want
      //if it is pop it off
      //else return false
    //else if it's an open one
      //add it to the end of the array
  
  
}

//second iteration
function isBalanced (str) {
  const stack = []
  const balanced = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  
  for (let char of str) {
    if (char === '}' || char === ')' || char === ']') {
      if ( stack[stack.length-1] === balanced[char]) {
        stack.pop()
      } else {
        return false
      }
    } else if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    }
  }
  
  if ( stack.length === 0 || stack.findIndex( (char) => char.match(/[\(\)\[\]\{\}]/) ) === -1 ) {
    return true
  } else {
    return false
  }
}


//third iteration
function isBalanced (str) {
  const stack = []
  const balanced = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  
  for (let char of str) {
    if ( char.match(/[)}\]]/) ) {
      if ( stack[stack.length-1] === balanced[char]) {
        stack.pop()
      } else {
        return false
      }
    } else if ( char.match(/[({\[]/) ) {
      stack.push(char)
    }
  }
  
  if ( stack.length === 0 || stack.findIndex( (char) => char.match(/[\(\)\[\]\{\}]/) ) === -1 ) {
    return true
  } else {
    return false
  }
}


//fourth iteration
function isBalanced (str) {
  const stack = []
  const balanced = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  
  for (let char of str) {
    if ( char.match(/[)}\]]/) ) {
      if ( stack[stack.length-1] === balanced[char]) {
        stack.pop()
      } else {
        return false
      }
    } else if ( char.match(/[({\[]/) ) {
      stack.push(char)
    }
  }
  
  if ( stack.length === 0 ) {
    return true
  } else {
    return false
  }
}


//fifth iteration
function isBalanced (str) {
  const stack = []
  const balanced = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  
  for (let char of str) {
    if ( char.match(/[)}\]]/) ) {
      if ( stack[stack.length-1] === balanced[char]) {
        stack.pop()
      } else {
        return false
      }
    } else if ( char.match(/[({\[]/) ) {
      stack.push(char)
    }
  }
  
  return stack.length === 0 ? true : false
}


//sixth iteration
function isBalanced (str) {
  const stack = []
  const balanced = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  for (let char of str) {
    if ( char.match(/[)}\]]/) ) {
      if ( stack[stack.length-1] === balanced[char]) {
        stack.pop()
      } else {
        return false
      }
    } else if ( char.match(/[({\[]/) ) {
      stack.push(char)
    }
  }
  return stack.length === 0 ? true : false
}


//final iteration
function isBalanced (str) {
  const stack = []
  const balanced = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  for (let char of str) {
    if ( char in balanced ) {
      if ( stack[stack.length-1] === balanced[char]) {
        stack.pop()
      } else {
        return false
      }
    } else if ( char.match(/[({\[]/) ) {
      stack.push(char)
    }
  }
  return stack.length ? false : true
}