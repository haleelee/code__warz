// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript


// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

function firstNonConsecutive (arr) {
  let control = arr[0];
  let newArray = [];
  let zebra = "no";

  for(let i = 0; i < arr.length-1; i++){
    if( arr[i+1] - 1 !== control ){
      // console.log(arr[i+1])
      return arr[i+1]
      zebra = "yes";
      i = arr.length+2;
      }
      newArray.push(control)
      control++
  }
  
  if (zebra === "no"){
  let endNum = arr[arr.length-1]
  newArray.push(endNum)

  // console.log(`The endNum is ${endNum}`)
  // console.log(`The arr is ${arr}`)
  // console.log(`The newArray is ${newArray}`)

  function areEqual(arr, newArray) {
    if (arr.length === newArray.length) {
      return arr.every((element, index) => {
        if (element === newArray[index]) {
          return true;
        }
  
        return false;
      });
    }
  
    return false;
  }

  if (areEqual(arr, newArray)){
    console.log(`The correct arr is ${arr}`)
    console.log(`The correct newArray is ${newArray}`)
    return null;
  }
}
}

firstNonConsecutive( [1,2,3,4,6,7,8] )
