// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  let combinedArray = [];
  let combined = "";
  let lengthString = [];
  if(strarr.length === 0 || k > strarr.length || k <= 0){
    return "";
  }else{
    for(let i = 0; i < strarr.length; i++){
      for(let j = 0; j < k; j++){
        if(!strarr[i + j]){
          // console.log("undefined string")
          j = k + 1;
        }else{
          combined += strarr[i + j];
        }
      }
      combinedArray.push(combined);
      lengthString.push(combined.length)
      combined = "";
    }
    // console.log(combinedArray);
    // console.log(lengthString);
    
    const maxLength = Math.max(...lengthString);
    const indexMaxLength = lengthString.indexOf(maxLength);
    // console.log(maxLength);
    // console.log(indexMaxLength);
    // console.log(combinedArray[indexMaxLength]);
    return combinedArray[indexMaxLength];
  }
}

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) //"abigailtheta"
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) //"oocccffuucccjjjkkkjyyyeehh"
longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"