// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
  let product = 1;
  for(let i = 1; i <= n; i++){
    product *= i;
  }
  return product;
}

factorial(17) // 355687428096000