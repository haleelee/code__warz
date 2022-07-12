// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// This kata is meant for beginners. Rank and upvote to bring it out of beta

function position(letter){
  return letter.length === 1 ? `Position of alphabet ${letter.charCodeAt(0) - 96}`: "error";
}

  position("z") //"Position of alphabet: 26"