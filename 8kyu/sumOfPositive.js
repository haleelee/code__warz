// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i];
    }
  }
  console.log(sum)
}

positiveSum([1, 6, 6, 2, 32, 2, -5, -151])


// function positiveSum(arr){
//   let sum = arr.reduce((n,x) => x > 0 ? n + x : n, 0);
// }

// function positiveSum([1, 2, 3, -1])
