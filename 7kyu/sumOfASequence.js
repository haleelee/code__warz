// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:

// Sum of a sequence (this kata)
// Sum of a Sequence [Hard-Core Version]

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let sum = 0;
  for (let i = begin; i < end + 1; i += step){
    sum += i 
  }
  return(sum)
};

sequenceSum(1, 5, 1)