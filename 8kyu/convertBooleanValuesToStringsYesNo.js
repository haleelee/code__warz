// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// I first wrote the solution with traditional if statement, then at the bottom used ternary!

// function boolToWord( bool ){
//   if( bool === true){
//     return "Yes";
    
//   } else{
//     return "No";
//   }
// }

function boolToWord( bool ) {
  return (bool ? "Yes" : "No")
}