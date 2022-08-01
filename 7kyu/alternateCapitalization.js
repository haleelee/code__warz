// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){

  //Declare a string variable for each converted string
  let evenString = "";
  let oddString = "";

    //Create first value that capitalizes evens
    for(let i = 0; i < s.length; i++){
      i % 2 === 0 ? evenString += s[i].toUpperCase() : evenString += s[i].toLowerCase();
    }
    
    //Create second value that capitalizes odds
    for(let i = 0; i < s.length; i++){
      i % 2 !== 0 ? oddString += s[i].toUpperCase() : oddString += s[i].toLowerCase();
    }

    return [evenString, oddString]
  }
 

capitalize("abracadabra") //['AbRaCaDaBrA', 'aBrAcAdAbRa']