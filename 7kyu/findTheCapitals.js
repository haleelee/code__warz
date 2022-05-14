// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
  //P: parameters - take in a string as the parameter. We might want to split the string to look at every instance
  //R: return an array that is ordered with numbers indicating the index of upper case letters
  //E: capitals("CodEWaRs")
  // capitals("MMMGGGggg")
  // capitals("Mississippi")
  //P: take in the array  
  //split the array
  let split = word.split('');
  let newArr = [];
  //run a loop to create new array 
  for(let i = 0; i < word.length; i++){
      //if statement where if the letter is uppercase, return the index of that character
    if(split[i] === split[i].toUpperCase()){
      newArr.push(i);
    }
  }

return newArr;

};

capitals("CodEWaRs")
capitals("MMMGGGggg")
capitals("Mississippi")