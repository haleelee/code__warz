// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  //Code goes here!
  let position = 0;
  let evenPosition = 0;
  if( s.length === 1 || s.length === 2 ){
    // return s;
    // console.log(s);
    return s;
  } else if ( s.length % 2 === 0 ){
    // return s;
    // console.log(`This will be if even, ${s}`);
    position = s.length / 2;
    evenPosition = s.length / 2 - 1;
    // console.log(`position is ${position} and ${evenPosition} and character at that position is ${s.charAt(position)} and ${s.charAt(evenPosition)}`)
    const evenResults = [s.charAt(evenPosition), s.charAt(position)].join("")
    return evenResults;
    // console.log(evenResults);

  } else if ( s.length % 2 === 1 ){
    // return s;
    // console.log(`This will be if odd, ${s}`)
    position = s.length / 2 - .5;
    // console.log(`position is ${position} and character at that position is ${s.charAt(position)}`)
    return s.charAt(position)
  }
}

getMiddle("ggggggMgggggg")