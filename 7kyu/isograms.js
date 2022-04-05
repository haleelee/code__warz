// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  //convert string to all lowercase
  const lowerStr = str.toLowerCase();
  // console.log(lowerStr)

  //split string
  const splitStr = lowerStr.split('')
  // console.log(splitStr)
  // console.log(splitStr.length)

  //create a function that checks if duplicates exist, using the Set object
  
  function hasDuplicates(arr){
    return new Set(arr).size !== arr.length;
  }

  if (hasDuplicates(splitStr)){
    // console.log("Duplicates found")
    return false;
  } else {
    // console.log("No duplicates found")
    return true;
  }
}

isIsogram("Dermatoglyphics")