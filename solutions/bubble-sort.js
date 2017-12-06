//first iteration
var bubbleSort = function(array) {
  let index = 1
  let stillSorting = 0
  
  while( true ) { //stop condition is when no switch has been done
    if (array[index-1] > array[index]) {
      const temp = array[index]
      array[index] = array[index-1]
      array[index-1] = temp
      stillSorting++
    }
    
    if (index === array.length -1) {
      if (stillSorting === 0) {
        break
      } else {
        index = 1
        stillSorting = 0
      }
    }
    index++
  }
  
  return array
};


//second iteration - thanks to jaime
var bubbleSort = function(arr) {
  while (true) {
    let swaps = 0
    for (let i=0;i<arr.length;i++) {
      if ( arr[i] > arr[i+1] ) {
        const temp = arr[i+1]
        arr[i+1] = arr[i]
        arr[i] = temp
        swaps++
      }
    }
    if (swaps === 0) { break }
  }
  return arr
}

//third iteration
const bubbleSort = function(arr) {
  while (true) {
    let swaps = 0
    for (let i=0;i<arr.length;i++) {
      if ( arr[i] > arr[i+1] ) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swaps++
      }
    }
    if (swaps === 0) { return arr }
  }
}

//fourth iteration
const bubbleSort = function(arr) {
  while (true) {
    let swaps = 0
    for (let i=0;i<arr.length;i++) {
      if ( arr[i] > arr[i+1] ) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swaps++
      }
    }
    if (swaps === 0) { return arr }
  }
}

