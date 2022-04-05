// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  //split the array
  const string = n.toString();
  const splitString = string.split("");
  console.log(string);
  console.log(splitString);

  //sort the array
  const sortedString = splitString.sort();
  console.log(sortedString);

  //reverse the array
  const reversedString = sortedString.reverse();
  console.log(reversedString);

  //join the array
  const joinedArray = reversedString.join("");
  console.log(joinedArray);

  const finishedNum = parseInt(joinedArray);
  // console.log(finishedNum)

  return finishedNum;
}

descendingOrder(42145)