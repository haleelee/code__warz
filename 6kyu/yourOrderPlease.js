// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  let splitWords = words.split(' ');
  let arrayOfPositions = [];
  let newWordsArray = [];

  if(words.length > 0){
    for(let i = 0; i < splitWords.length; i++){
      for(let j = 0; j < splitWords[i].length; j++){
        if(splitWords[i].charCodeAt(j) >= 49 && splitWords[i].charCodeAt(j) <= 57){
          arrayOfPositions.push(Number(splitWords[i][j]))
        }
      }
    }
  
    for(let i = 0; i < splitWords.length; i++){
      newWordsArray.push(arrayOfPositions[i].toString() + splitWords[i]);
    }
  
    const sortedMappedArray = newWordsArray.sort().map(x => x.slice(1, x.length));
  
    return sortedMappedArray.join(' ');
  }else{
    return "";
  }
  
}

// order("is2 Thi1s T4est 3a") // "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2") // "Fo1r the2 g3ood 4of th5e pe6ople"