// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  let newArr = x.map(n => Number(n));
  console.log(newArr);
  return newArr.reduce((a, b) => a+b, 0);
}
