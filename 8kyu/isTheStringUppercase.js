// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this;

//  The following would work as well:
//  return this.toString() === this.toUpperCase();
//  --- Returning 'this' gives us [String: "C"], which is an Object. We need to convert (coercion) that object to a sting using this.toString() or to JSON.stringify(this) 
}

// 'c'.isUpperCase() // false, 'c is not upper case'
'hello I AM DONALD'.isUpperCase() // false