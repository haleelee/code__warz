// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

function reverseSeq(n){
  const arr = [];
  for (let i = 1; i <= n; i++){
    arr.push(i);
  }

  return arr.reverse();
  // console.log(arr.reverse());
}

reverseSeq(5)

// Below works too (is a solution in CodeWars), but for some reason does not work in Chrome.

// const reverseSeq = n => {
//   let arr = [];
//     for (let i=n; i>0; i--) {
//       arr.push(i);
//       } return arr;
//   };

//   reverseSeq(5)