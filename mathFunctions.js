// Function to add two arguments
function add(a, b) {
    let c = a + b;
    if (isNaN(c)) {
        return NaN;
    }
    return c;
}

// Function to subtract two arguments
function subtract(a, b) {
    let c = a - b;
    if (isNaN(c)) {
        return NaN;
    }
    return c;
}

// Function to multiply two arguments
function multiply(a, b) {
    let c = a * b;
    if (isNaN(c)) {
        return NaN;
    }
    return c;
}

// Function to divide two arguments
function divide(a, b) {
    let c = a / b;
    if (isNaN(c)){
        return NaN;
    }
    return c;
}

// Export statement
module.exports = {add, subtract, multiply, divide}
