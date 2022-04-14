// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  //split array
  const strArr = s.toString().split(" ");
  // console.log(strArr)

  //sort array by length
  let sortedStr = strArr.sort((a, b) => a.length - b.length)

  //grab first element in array (the shortest length), and return its length
  return sortedStr[0].length
}

findShort("Let's travel abroad shall we")