// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let oddSorted = [];
  let resultArr = [];
  let nullArr = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      oddSorted.push(array[i]);
    }
  }
  //need to sort numerically, not alphabetically
  oddSorted = oddSorted.sort((a,b) => a - b);

  for(let j = 0; j < array.length; j++){
    if(array[j] % 2 === 0){
      resultArr.push(array[j]);
    }else{
      resultArr.push(null);
    }
  }

  for(let k = 0; k < array.length; k++){
    if(resultArr[k] === null){
      nullArr.push(k);
    }

  }

  for(let i = 0; i < nullArr.length; i++){
    resultArr[nullArr[i]] = oddSorted[i]
  }

  console.log(resultArr);
  // return resultArr;
}

//sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]
sortArray([5, 3,  2, 8, 1, 4, 11]) // [1, 3, 5, 8, 0]