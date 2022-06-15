// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
  const splitStr = text.split(" ");
  let encryptedArr = [];
  for(let i = 0; i < splitStr.length; i++){
    let firstCharCode = splitStr[i].charCodeAt(0);
    let sliced = splitStr[i].split('').slice(1);
    const lastCharString = sliced.pop();
    const firstCharString = sliced.shift();
    
    sliced.push(firstCharString);
    sliced.unshift(lastCharString);
    // console.log(firstCharCode + sliced.join(""))
  
    encryptedArr.push(firstCharCode + sliced.join(""));
  }

  return encryptedArr.join(' ');
}

// encryptThis("Hello") // "72olle"
// encryptThis("good") // "103doo"
// encryptThis("hello world") // "104olle 119drlo"
encryptThis("A wise old owl lived in an oak")