// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let theString = str.split(" ").map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
  
  let reversedStr = theString.split(" ").reverse().join(" ")
  return reversedStr
}
solution("GkK RuCEUmu")