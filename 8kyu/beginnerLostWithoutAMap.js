// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
  const newArr = x.map(x => 2 * x);
  // console.log(newArr);
  return newArr;
}



maps([2, 2, 2, 2, 2, 2])