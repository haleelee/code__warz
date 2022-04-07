// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  //code here
  const toString = n.toString()
  const splitArr= toString.split("")
  const reverseArr = splitArr.reverse()
  
  // console.log(reverseArr)
  const reversedNum = reverseArr.map(Number)

  // console.log(reversedNum)
  return reversedNum
 
}

digitize(13253)


//Use this to see the answer in the DOM
// document.querySelector('#textGoesHere').innerText = `${splitArr}`