// https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript

// Karan's company makes software that provides different features based on the version of operating system of the user.

// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }
// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false
// Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false
// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.

function compareVersions (version1, version2) {

  const v1NumArray = version1.split('.').map(x => parseFloat(x));
  const v2NumArray = version2.split('.').map(x => parseFloat(x));

  console.log(v1NumArray);
  console.log(v2NumArray);

  if(v1NumArray.length >= v2NumArray.length){
    let bool = true;
    
      for(let i = 0; i < v2NumArray.length; i++){
          if(v1NumArray[i] > v2NumArray[i]){
            i = v2NumArray.length + 10;
          }else if(v1NumArray[i] === v2NumArray[i]){
            bool = true;
          }else{
            bool = false;
            i = v2NumArray.length + 10;
          }
      }

    // return bool;
    console.log(bool);
  }else{
    let bool = true;
    for(let i = 0; i < v1NumArray.length; i++){
      if(v1NumArray[i] > v2NumArray[i]){
        i = v1NumArray.length + 10;
      }else if(v1NumArray[i] === v2NumArray[i] && i+1 < v1NumArray.length){
        bool = true;
      }else if(v1NumArray[i] < v2NumArray[i]){
        bool = false;
        i = v1NumArray.length + 10;
      }else if(i + 1 === v1NumArray.length && bool === true){
        bool = false;
        i = v1NumArray.length + 10;
      }
    }

    // return bool;
    console.log(bool);
  }
}

// compareVersions("11", "10"); //returns true 
// compareVersions("11", "11"); //returns true
compareVersions("10.4", "10.4.8"); //returns false
// compareVersions("10.11.5", "10.10.22.1"); //returns true
// compareVersions("105.30.22.105.99.24.47.139", "105.30.22.105.28.136.128") // returns true;
// compareVersions("22.103.55.190", "22.103.177.41.126") // returns false