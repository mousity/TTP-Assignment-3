// Function to find longest substring in a string
function longestSubstring(str) {

    if(typeof str != 'string') {
        throw new Error();
    } else if (str.length == 1) {
        return 1;
    }
    // Variable declaration
    let longest = 0;    // Keeps track of the longest string so far
    let sub = "";       // Stores the current substring
    let count = {};     // Object to count how many appearances a character has made
    let toRemove = "";  // String to store characters to remove

    // For every character in the string...
    for(let i = 0; i < str.length; i++) {
        // Concat the most recent character
        sub += str.charAt(i);
        // If it has not been counted yet, add its count to the object
        if(!count[str.charAt(i)]){
            count[str.charAt(i)] = 1;
            // Else...
        } else { 
            // Set the remove string and the new substring without the repeating character
            toRemove = sub.slice(0, sub.indexOf(str.charAt(i)));
            sub = sub.slice(sub.indexOf(str.charAt(i)) + 1);
            
            // For every character to remove
            for(let j = 0; j < toRemove.length; j++) {
                // delete the key-value pair from our counter
                delete count[toRemove.charAt(j)];
            }
            // Reset the toRemove string for next time
            toRemove = "";
        }
        
        // If the current length is the longest the varibale has seen, replace it
        if(sub.length > longest) {
            longest = sub.length;
        }
    }
    // Return the longest counted substring
    return longest;
}

module.exports = {longestSubstring}