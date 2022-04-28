// https://tv.youtube.com/watch/bqqeI0qMuHM?vpp=2AGZCg%3D%3D&vp=0gEEEgIwBA%3D%3D

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
   let newArr = []; //our result array
   let strArr = ''; //our string array that is also split, if the argument is an array of chars or ints

   if(Array.isArray(iterable)){
    strArr = iterable;
   }else{
    strArr = iterable.split('');
   }
  for(let i = 0; i < strArr.length; i++){
    
    if (strArr[i] !== strArr[i+1]){
      newArr.push(strArr[i]);
    }
  }
  // console.log(newArr);
  return newArr;
}

uniqueInOrder('ABBCcAD')
uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder([1,2,2,3,3])
