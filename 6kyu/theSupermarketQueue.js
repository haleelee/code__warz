// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
  let arr = new Array(n).fill(0);
  console.log(arr)

  for (let i = 0; i < customers.length; i++) {
    let idx = arr.indexOf(Math.min(...arr));
    arr[idx] += customers[i];
    console.log(arr)
  }

  return Math.max(...arr);
}


queueTime([37,39,44,47,23,26,21,10,21,19], 4)

// [37,39,44,47] 37
// [0,2,7,10]
// [23,2,7,10]
// [21,0,5,8] 2
// [21,26,5,8] 
// [16,21,0,3] 5
// [16,21,21,3]
// [13,18,18,0] 3
// [13,18,18,10]
// [3,8,8,0] 10
// [3,8,8,21]
// [0,5,5,18] 3
// [19,5,5,18] 19

// take slices of the Array, based on the n

// subtract the minimum from each Element
// have a counter that increments the minimum
// replace the minimum with the next Element