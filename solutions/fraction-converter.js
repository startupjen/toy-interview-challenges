//first iteration
function fractionConverter (number) {
  let counter = 1
  let total = number
  
  while (total % 1) {
    total += number
    counter++
  }
  return `${total}/${counter}`
}

//second iteration
function fractionConverter (number) {
  let counter = 1
  while (number * counter % 1) { counter++ }
  return `${number*counter}/${counter}`
}
