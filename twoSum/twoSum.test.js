let {twoSum} = require('./twoSum');

describe(("Testing the twoSum() function for multiple cases"), () => {
    test("twoSum([1, 2, 3, 4, 5], 7) => [1, 4]", () => expect(twoSum([1, 2, 3, 4, 5], 7)).toStrictEqual([1, 4]));   // Indices found
    test("twoSum([1, 2, 3, -4, 5], 1) => [3, 4]", () => expect(twoSum([1, 2, 3, -4, 5], 1)).toStrictEqual([3, 4])); // Negative numbers in array
    test(("twoSum('cheese', 70) => Error"), () => (expect(() => twoSum('cheese', 70)).toThrow(Error)));             // Invalid data types
    test(("twoSum([1, 5, 10], 'cheese') => Error"), () => (expect(() => twoSum([1, 5, 10], 'cheese')).toThrow(Error)));
    test(("twoSum([3], 50) => Error"), () => (expect(() => twoSum([3], 50)).toThrow(Error)));                       // array too short
    test("twoSum([1, 2, 3, -4, 5], 10) => false", () => expect(twoSum([1, 2, 3, -4, 5], 10)).toBe(false));          // result not found
})