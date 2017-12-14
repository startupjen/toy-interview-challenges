
//first iteration
function telephoneWords(digitString) {
  const words = []
  const digitStringArr = digitString.split('')

  function allPermutations(word, digits) {
    if (digits.length === 0) {
      words.push(word)
      return
    }

    const currentDigit = digits[0]
    const letters = phoneDigitsToLetters[currentDigit].split('')
    const remainDigits = digits.slice(1)

    for (let i=0;i<letters.length;i++) {
      allPermutations(word + letters[i], remainDigits)
    }
  }

  allPermutations('', digitStringArr)
  return words
}



const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ' 
}

//second iteration
function telephoneWords(digitString, word='', results=[]) {
  if (word.length === digitString.length) { results.push(word) } 
  else {
    const letters = phoneDigitsToLetters[digitString[word.length]]
    letters.forEach( (letter) => telephoneWords(digitString, word+letter, results) )
  }
  return results
}

const phoneDigitsToLetters = {
  0: ['0'],
  1: ['1'],
  2: ['A','B','C'],
  3: ['D','E','F'],
  4: ['G','H','I'],
  5: ['J','K','L'],
  6: ['M','N','O'],
  7: ['P','Q','R','S'],
  8: ['T','U','V'],
  9: ['W','X','Y','Z']
}