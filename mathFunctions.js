function add(a, b) {
    let c = a + b;
    if (isNaN(c)) {
        return NaN;
    }
    return c;
}

function subtract(a, b) {
    let c = a - b;
    if (isNaN(c)) {
        return NaN;
    }
    return c;
}

function multiply(a, b) {
    let c = a * b;
    if (isNaN(c)) {
        return NaN;
    }
    return c;
}

function divide(a, b) {
    let c = a / b;
    if (isNaN(c)){
        return NaN;
    }
    return c;
}

module.exports = {add, subtract, multiply, divide}
