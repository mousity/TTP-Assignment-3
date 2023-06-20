let {add, subtract, multiply, divide}= require("./mathFunctions.js/");

// Describe the block of tests
describe(("Testing the math functions in our javascript file with different values"), () => {

    // All files test cases when both are negative, both are positive, both are strings, or one is 0
    test("add(1, 2) => 3", () => (expect(add(1, 2)).toBe(3)));
    test("add(-5, 2) => -3", () => (expect(add(-5, 2)).toBe(-3)));
    test("add(-2, -5) => -7", () => (expect(add(-2, -5)).toBe(-7)));
    test("add(/'apple/', /'banana/' => NaN", () => expect(add('apple', 'banana')).toBe(NaN));

    test("subtract(5, 2) => 3", () => (expect(subtract(5, 2)).toBe(3)));
    test("subtract(2, 5) => -3", () => (expect(subtract(2, 5)).toBe(-3)));
    test("subtract(-2, -5) => 3", () => (expect(subtract(-2, -5)).toBe(3)));
    test("subtract(/'apple/', /'banana/' => NaN", () => expect(subtract('apple', 'banana')).toBe(NaN));
    
    test("multiply(2, 5) => 10", () => (expect(multiply(2, 5)).toBe(10)));
    test("multiply(2, -5) => less than 0", () => (expect(multiply(2, -5)).toBeLessThan(0)));
    test("multiply(-2, -5) => more than 0", () => (expect(multiply(-2, -5)).toBeGreaterThan(0)));
    test("multiply(2, 0) => 0", () => (expect(multiply(2, 0)).toBe(0)));
    test("multiply(/'apple/', /'banana/' => NaN", () => expect(multiply('apple', 'banana')).toBe(NaN));

    test("divide(4, 2) => 2", () => (expect(divide(4, 2)).toBe(2)));
    test("divide(5, 2) => 2.5", () => (expect(divide(5, 2)).toBe(2.5)));
    test("divide(1, 2) => 0.5", () => (expect(divide(1, 2)).toBe(0.5)));
    test("divide(0, 0) => NaN", () => (expect(divide(0, 0)).toBe(NaN)));
    test("divide(/'apple/', /'banana/' => NaN", () => expect(divide('apple', 'banana')).toBe(NaN));
})