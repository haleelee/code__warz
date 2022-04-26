// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  // Your code here
  let splitStr = str.split('');
  let newArr = [];

  for(let i = 0; i < str.length; i++){
    newArr.push(splitStr[i], splitStr[i])
  }
  // console.log(newArr.join(''));
  return newArr.join('');
}

doubleChar("String")