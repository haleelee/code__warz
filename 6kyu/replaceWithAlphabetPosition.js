// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  //LOWER CASE the string
  let newArr = [];
  let splitStr = text.toLowerCase().split("")
  console.log(splitStr);

  for( let i = 0; i < splitStr.length; i++){
  switch(splitStr[i]){
    case 'a':
      newArr.push(1);
      break;
    case 'b':
      newArr.push(2);
      break;
    case 'c':
      newArr.push(3);
      break;
    case 'd':
      newArr.push(4);
      break;
    case 'e':
      newArr.push(5);
      break;
    case 'f':
      newArr.push(6);
      break;
    case 'g':
      newArr.push(7);
      break;
    case 'h':
      newArr.push(8);
      break;
    case 'i':
      newArr.push(9);
      break;
    case 'j':
      newArr.push(10);
      break;
    case 'k':
      newArr.push(11);
      break;
    case 'l':
      newArr.push(12);
      break;
    case 'm':
      newArr.push(13);
      break;
    case 'n':
      newArr.push(14);
      break;
    case 'o':
      newArr.push(15);
      break;
    case 'p':
      newArr.push(16);
      break;
    case 'q':
      newArr.push(17);
      break;
    case 'r':
      newArr.push(18);
      break;
    case 's':
      newArr.push(19);
      break;
    case 't':
      newArr.push(20);
      break;
    case 'u':
      newArr.push(21);
      break;
    case 'v':
      newArr.push(22);
      break;
    case 'w':
      newArr.push(23);
      break;
    case 'x':
      newArr.push(24);
      break;
    case 'y':
      newArr.push(25);
      break;
    case 'z':
      newArr.push(26);
      break;
    }
  }
  // console.log(newArr.join(' '));
  return newArr.join(' ');
}


alphabetPosition("The sunset sets at twelve o' clock.")