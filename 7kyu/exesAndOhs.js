// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xQuantity = 0;
  let oQuantity = 0;

  //lowercase the string
  //split the string
  const splitStr = str.toLowerCase().split("");
  console.log(splitStr);

  //run a loop that checks if each character is equal to 'x' or 'o'
  //increment a variable, one for x, one for o, when we get a true for the if statement
  
  for ( let i = 0; i < str.length; i++){
    if (splitStr[i] === 'x'){
      xQuantity++;
    } else if (splitStr[i] === 'o'){
      oQuantity++;
    }
  }
  
  console.log(`The number of x is ${xQuantity}`);
  console.log(`The number of o is ${oQuantity}`);

  //check if the x-variable and o-variable are equal
  // console.log(xQuantity === oQuantity ? true : false)
  return xQuantity === oQuantity ? true : false;
}

//Dear Sister,
// I know you probably hate my guts by now and already believe that I have died long ago in the wilderness. But you are wrong I am still alive. TOnight I will be fighting the greatest wrestler who ever lived, the great Ramses. I know you don't like wrestling, but know that I am leaving all my monies to the orphans and if I die in the ring know that I always loved you....

// as a brother in GainNode,
// Ignacio

//P.S. If we didn't end up taking our vows of celibacy, we could maybe get married and start a family with some ninos. But you know, whatever. ooxxooXoXXx

XO('ooxxooXoXXx')