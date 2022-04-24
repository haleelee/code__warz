// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
  // split the string and toLowerCase
  
  let lowerCaseWord = word.toLowerCase();
  console.log(lowerCaseWord);
  let newStr = '';

  for (let i = 0; i < lowerCaseWord.length; i++){
    if (lowerCaseWord.lastIndexOf(lowerCaseWord[i]) === lowerCaseWord.indexOf(lowerCaseWord[i])){
      newStr = newStr + "("; //this adds "(" if the char is not a duplicate
    } else {
      newStr = newStr + ")"; //this adds ")" if the char is a duplicate
    }
  }
  console.log(newStr);
}

duplicateEncode("Success")