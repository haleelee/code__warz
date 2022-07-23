// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let currentDateConverted = new Date(currentDate);
  let expirationDateConverted = new Date(expirationDate);
  return enteredCode === correctCode && currentDateConverted <= expirationDateConverted
}

checkCoupon('123','123','September 5, 2014','October 1, 2014') // true