// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {

  // return a new array of strings
  const arrayStrings = str.split("");
  console.log(arrayStrings)
 
  // reverse the new created array elements
  const reverseArray = arrayStrings.reverse();
  console.log(reverseArray)

  // join all elements of the array into a string
  const joinArray = reverseArray.join("");
  
  
  // return the reversed string
  console.log(joinArray);

  const newWords = joinArray.split(" ");
  console.log(newWords);

  const reverseNewWords = newWords.reverse();
  console.log(reverseNewWords);

  const joinNewWords = reverseNewWords.join(" ");
  // console.log(joinNewWords)
  return joinNewWords;

}

reverseWords("Hello there buddy how is it going")