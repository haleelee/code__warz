// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  let splitSentence = x.split(' ');
  // console.log(splitSentence)
  let valueOfEachWordArray = [];
  for(let i = 0; i < splitSentence.length; i++){
    let word = splitSentence[i];
    let values = word.split('').map(x => x.toLowerCase().charCodeAt() - 96);
    valueOfEachWordArray.push(values.reduce((acc, c) => acc + c, 0))
  }
  // console.log(valueOfEachWordArray)
  let indexOfHighest = valueOfEachWordArray.indexOf(Math.max(...valueOfEachWordArray));
  // console.log(indexOfHighest)
  
  return splitSentence[indexOfHighest];
  // console.log(splitSentence[indexOfHighest])
}

high('man i need a taxi up to ubud') //'taxi'