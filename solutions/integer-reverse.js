
function reverseInteger (input) {
  let reverse = 0
  while (input) {
    reverse = reverse*10 + input % 10
    input = Math.floor(input / 10)
  }
  return reverse
}