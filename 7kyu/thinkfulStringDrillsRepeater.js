// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript

// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

 
  function repeater(string, n){
  //P: parameters - take in a string and a number
  //R: return should be a new string where the input is repeated "number" number of times
  //E: "a", 5 ---> "aaaaa"
  //P: use the repeat method
  return string.repeat(n);
  }

repeater("a", 5) //"aaaaa"