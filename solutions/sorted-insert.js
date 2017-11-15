function sortedInsert(stack, element) {
  //insert element in where appropriate in stack
    //while loop
    //break out when inserted
  //push others back in
    //iterate thru
    //add them in
  //return stack
}

//emphasize how when it's drawn out clearly,
//the problem is much easier to approach



function sortedInsert(stack, element) {
  //insert element in
  //push others back in
  let isInserted = false
  let arr = []
  console.log('stack is ', stack)
  console.log('stack store is ', stack.store)
  while ( !isInserted ) {
    const peek = stack.peek()
    console.log('peek is ', peek)
    if (peek >= element || peek === null || peek === undefined) {
      console.log('inserted element ', element)
      stack.push(element)
      isInserted = true
    } else {
      arr.unshift(stack.pop())
    }
  }
  
  //iterate thru to put it back
  console.log('arr is ', arr)
  let length = arr.length
  for (let i=0;i<length;i++) {
    console.log('arr.length is ', arr.length)
    stack.push(arr.shift())
  }
  
  //breakout condition is inserted
  
  //mention that the instructions sorta suck
  //look at the tests
  console.log('returned stack is ', stack)
  return stack
}

//least on top, to greatest on bottom



//second iteration
function sortedInsert(stack, element) {
  const arr = []
  while ( true ) {
    const peek = stack.peek()
    if (peek >= element || peek === undefined ) {
      stack.push(element)
      break;
    } else {
      arr.unshift(stack.pop())
    }
  }
  let length = arr.length
  for (let i=0;i<length;i++) {
    stack.push(arr.shift())
  }
  return stack
}

//third iteration
function sortedInsert(stack, element) {
  let arr = [], loop = true
  while ( loop )
    stack.peek() >= element || stack.isEmpty() ? (stack.push(element), loop = false) : arr.unshift(stack.pop())
  arr.forEach( (val) => stack.push(val))
  return stack
}

//another solution approach
function sortedInsert (stack, element) {
  const temp = []
  while( stack.peek() <= element && !stack.isEmpty() )
    temp.unshift(stack.pop())
  stack.push(element)
  temp.forEach( (val) => stack.push(val))  
  return stack
}

//concising code when it takes away from initial purpose
function sortedInsert (stack, element, temp = []) {
  while( stack.peek() <= element && !stack.isEmpty() ) { temp.unshift(stack.pop()) }
  stack.push(element)
  temp.forEach( (val) => stack.push(val))  
  return stack
}