// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
  //let strLC = str[i].toLowerCase();
  let newArr = [];
  let newStr = "";
  for (let i = 0; i < str.length; i++){
   if(i === 0 && str[i] !== " "){
   newArr.push(str.charAt(0).toUpperCase() + str.slice(1));
   }else if (str[i] !== " "){
   newArr.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1, str.length+1));
  }
 }
  return newArr;
}