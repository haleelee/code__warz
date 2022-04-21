// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
//split string
  let splitStr = string.split('');
  let outputStr = [];
  
  for(let i = 0; i < splitStr.length; i++){
    if( splitStr[i] === splitStr[i].toUpperCase()){
      
      outputStr.push(" ");
      outputStr.push(`${splitStr[i]}`);
  } else{
    outputStr.push(splitStr[i]);
  }
}
  return outputStr.join('');
  // console.log(outputStr.join(''));

}


solution('camelCasingString')