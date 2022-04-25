// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // find number of digits

  let result = '';

  const numDigits = num.toString().length;

  // find the larest Tens place
  let largestTens = Math.pow(10, numDigits - 1);

  for (let i = 0; i < numDigits; i++){
    let string = num.toString()[i];

    let floor = Number(string) * (largestTens)

    if (floor !== 0){
      if( largestTens === 1 ){
        result += ` ${floor}`
      } else {
        result += ` ${floor} +`
      }
    }

    //decrease largestTens by a tens place
    largestTens = largestTens / 10;
   
  }

  let trimmed = result.trim();

  if (trimmed[trimmed.length - 1] === "+"){
    return trimmed.slice(0, trimmed.length-1);
  } else{
    return result.trim();
  }

}

expandedForm(9000000)
