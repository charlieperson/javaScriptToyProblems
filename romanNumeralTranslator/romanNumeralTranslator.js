function translateRomanNumeral (romanNumeral) {
  romanArray = romanNumeral.split('');
  return romanArray.reduce((accum, item, index) => {
    if(!DIGIT_VALUES[item]) return "null"
    if(DIGIT_VALUES[romanArray[index+1]] > DIGIT_VALUES[item]) {
      return accum - DIGIT_VALUES[item]
    } else {
      return accum + DIGIT_VALUES[item]
    }
  }, 0)
}
