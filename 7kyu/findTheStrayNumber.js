// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  const unique = Array.from(new Set(numbers));
  let counter0 = 0;
  let counter1 = 0;
  console.log(unique);
  for(let i = 0; i < numbers.length; i++){
    if(unique[0] === numbers[i]){
      counter0++;
    }else if (unique[1] === numbers[i]){
      counter1++;
    }
  }
  return counter0 < counter1 ? unique[0] : unique[1];
}

stray([1, 1, 2])
stray([17, 17, 3, 17, 17, 17, 17])