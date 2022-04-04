// https://www.codewars.com/kata/559d2284b5bb6799e9000047

//Kata Instructions
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


//This is my first attempt (did not go well).

// function addLength(str) {
//     //store string into a variable
//      //separate the string into separate values
//     //get hte length of each string
//     //return the new string that combines everything
    
//     let sepStr = str.split(" ")
//     console.log(sepStr)
//     console.log(sepStr[0].length)
//     let newStr = sepStr[0] + " " + sepStr[0].length

//     for(let i = 1; i < sepStr.length; i++){
//             newStr = newStr + " " + sepStr[i] + " " + sepStr[i].length
//         }
//         console.log(newStr)
//     }
    


// addLength("Why hello there Mister Robinson")
   

function addLength(str) {
    //store string into a variable
     //separate the string into separate values
    //get hte length of each string
    //return the new string that combines everything
    
    let sepStr = str.split(" ")
    console.log(sepStr)
    // console.log(sepStr)
    // console.log(sepStr[0].length)
    // let newStr = sepStr[0] + " " + sepStr[0].length

    for(let i = 0; i < sepStr.length; i++){
        sepStr[i] = sepStr[i] + " " + sepStr[i].length
        }
        console.log(sepStr)
    }
    


addLength("I got friends in Atlanta")