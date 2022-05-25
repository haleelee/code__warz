// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

function race(v1, v2, g) {
  
  // Parameters: v1 is a speed, v2 is a speed, g is the lead in fph. if v1 > v2 then there's no catching A
  // Returns: we need to return an array that splits hrs, min, sec. So we need to do some conversion when min and sec are greater than 60
  // Examples: see below
  // Pseudo Code: create if statement that returns null if v1 > v2
  // run for loop that iterates until the distance traveled is equal
  

  if(v1 >= v2){
    return null;
  }else{
    const hoursDecimal = g / (v2 - v1);
    const hours = Math.floor(hoursDecimal);
    const minutesDecimal = (hoursDecimal - hours) * 60;
    const minutes = Math.floor(minutesDecimal);
    const secondsDecimal = (minutesDecimal - minutes) * 60;
    const seconds = Math.ceil(secondsDecimal);

    const timeArray = [hours, minutes, seconds]
    // console.log(timeArray)
    return timeArray;
  }
}


race(720, 850, 70)
// race(80, 91, 37)
// race(80, 100, 40)
// race(100, 50, 2)