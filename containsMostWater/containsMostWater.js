function containsMostWater(arr) {
    // type validaton
    if(!Array.isArray(arr)){
        throw new Error();
    }

    // variables to store largest value and lowest between the value pairs
    let biggest = 0;
    let lower;

    // nested loop to cross check all elements in array
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                lower = arr[j];
            } else {
                lower = arr[i];
            }

            // If calculation is larger than our current number, replace it
            if(lower * (j - i) > biggest) {
                biggest = lower * (j - i);
            }
        }
    }
    return biggest;
}

module.exports = {containsMostWater}