// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2){
  if(!Array.isArray(array1) || !Array.isArray(array2)){
    return false;
  }else{  
      let counter = 0;
      let sorted1 = array1.sort((a, b)=>a-b);
      let sorted2 = array2.sort((a, b)=>a-b); 
      for(let i = 0; i < array1.length; i++){
        if(sorted1[i] === Math.sqrt(sorted2[i])){
          counter++;
        }
      }
      if(counter === array1.length){
        return true;
      }else{
        return false;
      }
    }
}