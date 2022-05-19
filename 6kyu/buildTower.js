// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 1
//   "    ***    ", 3
//   "   *****   ", 5
//   "  *******  ", 7
//   " ********* ", 9
//   "***********" 11
// ]

function towerBuilder(nFloors) {
  let star = "*";
  let towerLines = [];
  let starCount = 1;

  for(let i = 0; i < nFloors; i++){
   towerLines.push(" ".repeat(nFloors - i - 1) + 
   star.repeat(starCount) +
  " ".repeat(nFloors - i - 1));
  starCount += 2;
  }
  
  return towerLines;
}

towerBuilder(3)


// floors is 5
//   "     *     ", 1 star - 5 spaces 
//   "    ***    ", 3 stars - 4 spaces 
//   "   *****   ", 5 stars - 3 spaces
//   "  *******  ", 7 stars - 2 spaces
//   " ********* ", 9 stars - 1 space
//   "***********" 11 stars

