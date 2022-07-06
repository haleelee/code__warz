// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  for(let i = 0; i < b.length; i++){
    let j = a.length;
    while(j--){
      if(a[j] === b[i]){
        a.splice(a.indexOf(b[i]), 1);
      }
    }
  }
  
  // console.log(a);
  return a;
}

arrayDiff([1,2,3], [1,2]) // [3]
arrayDiff([1,2,2], [1]) // [2,2]
arrayDiff([1,2,2,2,3],[2]) // [1,3]
arrayDiff([1,2,2], [2]) // [1]