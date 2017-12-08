//first iteration
function insertionSort (arr) {
  console.log('arr is ', arr)
  for (let i=1;i<arr.length;i++) {
    if (arr[i].value < arr[i-1].value) {
      let backwardsIndex = i-1
      let insert = arr.splice(i,1)[0]
      console.log('element to insert is ', insert)
      while (true) {
        console.log('i is ', i)
        console.log('backwardsIndex is ', backwardsIndex)
        console.log('arr[backwardsIndex] ', arr[backwardsIndex])
        if (backwardsIndex == -1 || arr[backwardsIndex].value < insert.value ) {
          console.log('inserting now')
          arr.splice(backwardsIndex+1, 0, insert)
          break
        } else if (arr[backwardsIndex].value === insert.value) {
          if (arr[backwardsIndex].order < insert.order) {
            arr.splice(backwardsIndex+1,0,insert)
            break
          }
        } 
        backwardsIndex--
      }
      console.log('arr is now ', arr)
    }
  }
  
  console.log('result is ', JSON.stringify(arr))
  return arr
}


//second iteration
function insertionSort (arr) {
  for (let i=1;i<arr.length;i++) {
    if (arr[i].value < arr[i-1].value) {
      let insert = arr.splice(i,1)[0]
      for (let goBack=i-1;goBack>=-1;goBack--) {
        if (goBack == -1 || arr[goBack].value < insert.value ) {
          arr.splice(goBack+1, 0, insert)
          break
        } else if (arr[goBack].value === insert.value) {
          if (arr[goBack].order < insert.order) {
            arr.splice(goBack+1,0,insert)
            break
          }
        } 
      }
    }
  }
  return arr
}


//third iteration
function insertionSort (arr) {
  for (let i=1;i<arr.length;i++) {
    let insert = arr.splice(i,1)[0]
    for (let goBack=i-1;goBack>=-1;goBack--) {
      if (goBack === -1 || arr[goBack].value < insert.value ) {
        arr.splice(goBack+1, 0, insert)
        break
      } else if (arr[goBack].value === insert.value && arr[goBack].order < insert.order) {
        arr.splice(goBack+1,0,insert)
        break
      } 
    }
  }
  return arr
}


//fourth iteration
function insertionSort (arr) {
  for (let i=1;i<arr.length;i++) {
    for (let goBack=i-1;goBack>=-1;goBack--) {
      if (goBack === -1 || 
          arr[goBack].value < arr[i].value || 
          (arr[goBack].value === arr[i].value && arr[goBack].order < arr[i].order) 
        ) {
        arr.splice(goBack+1, 0, arr.splice(i,1)[0])
        break
      }
    }
  }
  return arr
}

//fifth ieration
function insertionSort (arr) {
  for (let i=1;i<arr.length;i++) {
    for (var goBack=i-1;goBack>-1;goBack--) {
      if ( arr[goBack].value < arr[i].value
           || 
           (arr[goBack].value === arr[i].value && arr[goBack].order < arr[i].order) 
      ) { break }
    }
    arr.splice(goBack+1, 0, arr.splice(i,1)[0])
  }
  return arr
}


