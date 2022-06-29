// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {

  let ascendingArr = array.slice(0).sort((a,b) => a - b);
  let descendingArr = ascendingArr.slice(0).reverse();

  if(JSON.stringify(array) === JSON.stringify(ascendingArr)){
    return "yes, ascending";
  }else if(JSON.stringify(array) === JSON.stringify(descendingArr)){
    return "yes, descending";
  }else{
    return "no";
  }
}

// isSortedAndHow([1, 2]) // 'yes, ascending'

isSortedAndHow([15, 7, 3, -8]) // 'yes, descending'

// isSortedAndHow([4, 2, 30]) // 'no'