// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  

  //find lowest number in array and re-assign it to lowestNum
  let lowestNum = Math.min(...numbers);
  console.log(lowestNum)

  //remove the lowest value from the array
  console.log(numbers.splice(numbers.indexOf(lowestNum), 1));
  console.log(numbers)

  //find second lowest number in array and re-assign it to secondLowestNum
  let secondLowestNum = Math.min(...numbers);
  console.log(secondLowestNum);

  //add the two numbers together and store that value to a new variable called sum
  //return sum
  const sum = lowestNum + secondLowestNum;
  // console.log(sum)
  return sum;
}

sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])