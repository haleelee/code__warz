// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  // first check if it is an array
  if(array && array.length > 1){
    
    // then sort the array
    // then slice the first and last elements in array
    const sortedArray = array.sort((a,b) => a-b).slice(1,-1);
    
      // reduce the array
    return sortedArray.reduce((acc,c) => acc + c, 0);

   // else (array is null or undefined)
  } else{
    return 0;
  }
    }

sumArray([ -6, 20, -1, 10, -12 ])                  