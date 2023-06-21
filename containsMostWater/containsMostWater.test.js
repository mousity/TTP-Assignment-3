let {containsMostWater} = require('./containsMostWater');

// Tests cases for the containsMostWater() function
describe(("Test the containsMostWater() function through cases"), () => {

    test("containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) => 49", () => expect(containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49));    // Normal case
    test("containsMostWater([4, 3, 2, 1, 4]) => 16", () => expect(containsMostWater([4, 3, 2, 1, 4])).toBe(16));                            // Normal case
    test("containsMostWater([1, 2, 1]) => 2", () => expect(containsMostWater([1, 2, 1])).toBe(2));                                          // Short case
    test("containsMostWater('cheese') => Error", () => (expect(() => containsMostWater('cheese')).toThrow(Error)));                         // invalid data type
    test("containsMostWater(1) => Error", () => (expect(() => containsMostWater(1)).toThrow(Error)));                                       // invalid data type
})