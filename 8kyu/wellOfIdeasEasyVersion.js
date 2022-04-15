// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
  
  const countGood = (x.filter( num => num === 'good')).length
  if (countGood === 1 || countGood === 2){
    return "Publish!"
  } else if (countGood > 2){
    return "I smell a series!"
  } else{
    return "Fail!"
  }
}

well(['good', 'good', 'good', 'bad', 'bad', 'bad', 'bad'])


//Use this to see the answer in the DOM
// document.querySelector('#textGoesHere').innerText = `${splitArr}`