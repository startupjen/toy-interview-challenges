function translateRomanNumeral (romanNumeral) {
  let total = 0
  
  for (let i=0; i< romanNumeral.length; i++) {
    const curr = DIGIT_VALUES[romanNumeral[i]]
    const next = DIGIT_VALUES[romanNumeral[i+1]]

    if ( !curr ) { return 'null' }
    
    if ( next && curr >= next ) {
      total += curr
    } else {
      total -= curr
    }
  }
  
  return total
}


//second iteration (this is ugly)
function translateRomanNumeral (romanNumeral) {
  let total = 0
  for (let i=0; i< romanNumeral.length; i++) {
    if ( !DIGIT_VALUES[romanNumeral[i]] ) { return 'null' }
    DIGIT_VALUES[romanNumeral[i]] >= DIGIT_VALUES[romanNumeral[i+1]] || !DIGIT_VALUES[romanNumeral[i+1]] ? total += DIGIT_VALUES[romanNumeral[i]] : total -= DIGIT_VALUES[romanNumeral[i]]
  }
  return total
}
