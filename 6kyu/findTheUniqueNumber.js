// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


function findUniq(arr) {
  // do magic
  const newArr = [];
  let counter0 = 0;
  let counter1 = 0;

  const list = arr.filter((x, i, a) => a.indexOf(x) === i); // returns an array of the unique values

  for (let i = 0; i < arr.length; i++){
        if (arr[i] === list[0]){
        counter0++;
      } else{
        counter1++;
      }
    }

    if( counter0 < counter1 ){
      return list[0];
      // console.log(list[0])
    } else{
      return list[1];
      // console.log(list[1])
    }


}




findUniq([1, 0, 0])