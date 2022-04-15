// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
  let splitStr = x.split('')
  let newArr = [];

  for (let i = 0; i < splitStr.length; i++){

    //UPPERCASE
    switch (splitStr[i]){
      case 'A':
        newArr.push(65);
        break;
      case 'B':
        newArr.push(66);
        break;
      case 'C':
        newArr.push(67);
        break;
      case 'D':
        newArr.push(68);
        break;
      case 'E':
        newArr.push(69);
        break;
      case 'F':
        newArr.push(70);
        break;
      case 'G':
        newArr.push(71);
        break;
      case 'H':
        newArr.push(72);
        break;
      case 'I':
        newArr.push(73);
        break;
      case 'J':
        newArr.push(74);
        break;
      case 'K':
        newArr.push(75);
        break;
      case 'L':
        newArr.push(76);
        break;
      case 'M':
        newArr.push(77);
        break;
      case 'N':
        newArr.push(78);
        break;
      case 'O':
        newArr.push(79);
        break;
      case 'P':
        newArr.push(80);
        break;
      case 'Q':
        newArr.push(81);
        break;
      case 'R':
        newArr.push(82);
        break;
      case 'S':
        newArr.push(83);
        break;
      case 'T':
        newArr.push(84);
        break;
      case 'U':
        newArr.push(85);
        break;
      case 'V':
        newArr.push(86);
        break;
      case 'W':
        newArr.push(87);
        break;
      case 'X':
        newArr.push(88);
        break;
      case 'Y':
        newArr.push(89);
        break;
      case 'Z':
        newArr.push(90);
        break;

      //LOWER CASE
      case 'a':
        newArr.push(97);
        break;
      case 'b':
        newArr.push(98);
        break;
      case 'c':
        newArr.push(99);
        break;
      case 'd':
        newArr.push(100);
        break;
      case 'e':
        newArr.push(101);
        break;
      case 'f':
        newArr.push(102);
        break;
      case 'g':
        newArr.push(103);
        break;
      case 'h':
        newArr.push(104);
        break;
      case 'i':
        newArr.push(105);
        break;
      case 'j':
        newArr.push(106);
        break;
      case 'k':
        newArr.push(107);
        break;
      case 'l':
        newArr.push(108);
        break;
      case 'm':
        newArr.push(109);
        break;
      case 'n':
        newArr.push(110);
        break;
      case 'o':
        newArr.push(111);
        break;
      case 'p':
        newArr.push(112);
        break;
      case 'q':
        newArr.push(113);
        break;
      case 'r':
        newArr.push(114);
        break;
      case 's':
        newArr.push(115);
        break;
      case 't':
        newArr.push(116);
        break;
      case 'u':
        newArr.push(117);
        break;
      case 'v':
        newArr.push(118);
        break;
      case 'w':
        newArr.push(119);
        break;
      case 'x':
        newArr.push(120);
        break;
      case 'y':
        newArr.push(121);
        break;
      case 'z':
        newArr.push(122);
        break;
    }

 
  }

//split into an array and convert to numbers. then reduce the array
  let total1 = newArr.join('').split('');
  console.log(total1)
  let newTotal1 = [];
  let newTotal2 = [];
  
  for(let i = 0; i < total1.length; i++){
    newTotal1.push( Number(total1[i]))
  }

  let sumTotal1 = newTotal1.reduce((acc, c) => acc + c, 0);
  console.log(sumTotal1)
  

 //take total1 and convert all 7's to 1's
 for (let i = 0; i < total1.length; i++){
   if( total1[i] !== '7'){
     newTotal2.push(Number(total1[i]));
   } else {
     newTotal2.push(1);
   }
 }

  let sumTotal2 = newTotal2.reduce((acc, c) => acc + c, 0);
  console.log(newTotal2);
  console.log(sumTotal2);

 return sumTotal1 - sumTotal2;

  }


calc('abcdef') // 6


// THIS IS CODE IN MY ATTEMPT TO MAKE IT A LOOP. DID NOT TURN OUT WELL HAHA

  // let splitStr = x.split('')
    // let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    // let numArr = [];

    // for (let i = 0; i < splitStr.length; i++){

    //   switch (splitStr[i]){
    //     case upperAlphabet[i]:
    //       numArr.push(i + 65)
          
    //   }
    // }
    // console.log(numArr)
    // let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // let splitStr = string.split('');
    // console.log(splitStr)
    // for ( let i = 65; i < string.length + 65; i++){
    //   if( )
    // }