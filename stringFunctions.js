// Function to reverse a string and return the result
function reverseString(str) {
    let rev = "";
    if(typeof str != 'string') {
        return "Not a String";
    }
    
    for(let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    return rev;
}

// Function to check if a string is a palindrome and returns a boolean
// Is not case sensitive
function isPalindrome(str) {
    if(typeof str != 'string') {
        return false;
    }
    if(str.toUpperCase() == reverseString(str).toUpperCase()) {
        return true;
    }
    return false;
}

// Export statement
module.exports = {reverseString, isPalindrome}