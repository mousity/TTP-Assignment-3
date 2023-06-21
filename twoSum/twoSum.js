function twoSum(arr, target) {
    // Variable delcaration for an array that will return the indexes
    let indexes = [];
  
    // Throw an error if the array is less than two
    if(arr.length < 2 || !Array.isArray(arr) || typeof target != 'number'){
      throw new Error("This is not a valid function call!");
    }
  
    // nested array to compare all pairs in an array
    outer: for(let i = 0, x = arr.length; i < x; i++){
      inner: for(let j = (i + 1); j < x; j++) {
        
        // If a pair is found, set the indexes where the match was found
        if (arr[i] + arr[j] == target){
          indexes.push(i);
          indexes.push(j);
          // Breaks out of the outer label, stopping all iteration
          break outer;
        }
      }
    }
    // if array is empty, return false, as result was not found
    if(indexes.length > 0){
        return indexes;
    } else {
        return false;
    }
  }

  module.exports = {twoSum};