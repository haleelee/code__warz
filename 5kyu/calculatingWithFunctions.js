// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(string) {
  let num = 0;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function one(string) {
  let num = 1;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function two(string) {
  let num = 2;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function three(string) {
  let num = 3;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function four(string) {
  let num = 4;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function five(string) {
  let num = 5;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function six(string) {
  let num = 6;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function seven(string) {
  let num = 7;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}
  
function eight(string) {
  let num = 8;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    }
}

function nine(string) {
  let num = 9;
  if(typeof string === "undefined"){
    return num;
  } else {
    console.log(num.toString() + string)
    return operate(string, num)
    
    }
}

function operate(horford, alvarado){
  switch(horford[0]){
    case "+":
      // console.log(alvarado + Number(horford[1]));
      return alvarado + Number(horford[1]);
    case "-":
      // console.log(alvarado - Number(horford[1]));
      return alvarado - Number(horford[1]);
    case "*":
      // console.log(alvarado * Number(horford[1]));
      return alvarado * Number(horford[1]);
    case "/":
      // console.log(Math.floor(alvarado / Number(horford[1])));
      return Math.floor(alvarado / Number(horford[1]));
  }
}

function plus(num) {return "+" + num}
function minus(num) {return "-" + num}
function times(num) {return "*" + num}
function dividedBy(num) {return "/" + num}

seven(times(five()))
four(plus(nine()))
eight(minus(three()))
six(dividedBy(two()))