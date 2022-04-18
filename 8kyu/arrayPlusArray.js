// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc,c) => acc + c, 0) + arr2.reduce((acc,c) => acc + c, 0);
}

//Below was my old solution:

// function arrayPlusArray(arr1, arr2) {
//   // return arr1 + arr2; //something went wrong
// // 0 + 1 + 2 + 3 + 4
// sum1 = arr1.reduce(function(a,b){
//   return a + b;
// }, 0)

// console.log(sum1);

// sum2 = arr2.reduce(function(a,b){
//   return a + b;
// }, 0)

// console.log(sum2);

// // expected output: 10

// return sum1 + sum2;
// }


arrayPlusArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])