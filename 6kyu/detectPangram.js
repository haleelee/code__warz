// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  //convert string to lower case 
  const lowercaseStr = string.toLowerCase()

  //use for of loop to see if string includes each letter of alphabet
  for (let char of 'abcdefghijklmnopqrstuvwxyz'){
    if (!lowercaseStr.includes(char)){
      return false;
        }
  }
  return true;
}

// isPangram("The quick brown fox jumps over the lazy dog")
isPangram("abcef")