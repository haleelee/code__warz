// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  // first, create an array of unique occurrances
  let dupRemoved = [...new Set (A)];
  let newArr = []; 
  
  //then use loop to create a newArr array that shows the number of occurrances for each element.
  for(let i = 0; i < dupRemoved.length; i++){
    newArr.push( (A.filter(x => x == dupRemoved[i]).length ))
  }

  //use loop to find which element in newArr is odd

for( let j = 0; j < newArr.length; j++){
  if (newArr[j] % 2 === 1){
    return dupRemoved[j];
  }
}
}

//these are other attempts below for filtering unique occurances
// const result = A.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
// console.log(result);



findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])