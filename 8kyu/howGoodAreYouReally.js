// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = classPoints.reduce( (acc, c) => acc + c, 0);

  let average = sum / classPoints.length;

  console.log(sum)
  console.log(average)

  // console.log(average < yourPoints ? true : false);
  return average < yourPoints ? true : false;

}


betterThanAverage([99, 78, 83, 94, 89], 87)


//Use this to see the answer in the DOM
// document.querySelector('#textGoesHere').innerText = `${splitArr}`