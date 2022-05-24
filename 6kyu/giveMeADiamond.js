// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){

  let arr = [];
  let spaceCount = Math.floor(n/2)

  if(n % 2 <= 0){
    return null;
  }else{
    // loop for the first half of stars
    for(let i = 1; i <= n; i += 2){
      if(spaceCount >= 0){
        arr.push(" ".repeat(spaceCount));
      }
      arr.push("*".repeat(i) + "\n");
      spaceCount -= 1;
    }

    //loop for the other half
    spaceCount = n - (n-1);
    for(let i = n-2; i > 0; i -= 2){
      
      if(spaceCount >= 0){
        arr.push(" ".repeat(spaceCount));
      }
      arr.push("*".repeat(i) + "\n")
      spaceCount++;
    }

  }

  return arr.join('');
  // console.log(arr.join(''))
  
}

diamond(9)
diamond(11)