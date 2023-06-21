function reverseString(str) {
    let rev = "";
    // If not a string, return a statement
    if(typeof str != 'string') {
        return "Not a String";
    }
    
    // Else, put the letters starting from the back of the passed string into the front of the reverse string
    for(let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    return rev;
}

module.exports = {reverseString}