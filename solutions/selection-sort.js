//student completed iteration
function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
    let minIndex = i
    for (let j=i+1; j<arr.length;j++) {
      if (arr[j] < arr[minIndex]) { minIndex = j }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

//second iteration
function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
    let minIndex = i
    for (let j=i+1; j<arr.length;j++) {
      if (arr[j] < arr[minIndex]) { minIndex = j }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

//third - small optimization with last index
function selectionSort(arr) {
  for (let i=0; i<arr.length-1; i++) {
    let minIndex = i
    for (let j=i+1; j<arr.length;j++) {
      if (arr[j] < arr[minIndex]) { minIndex = j }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

//fourth iteration
function selectionSort(arr) {
  for (let i=0; i<arr.length-1; i++) {
    let minIndex = i
    for (let j=i+1; j<arr.length;j++) {
      if (arr[j] < arr[minIndex]) { [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] }
    }
  }
  return arr
}

//final
function selectionSort(arr) {
  for (let i=0; i<arr.length-1; i++) {
    for (let j=i+1; j<arr.length;j++) {
      if (arr[j] < arr[i]) { [arr[i], arr[j]] = [arr[j], arr[i]] }
    }
  }
  return arr
}