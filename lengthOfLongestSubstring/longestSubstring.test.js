let {longestSubstring} = require('./longestSubstring');

// Testing our longestSubstring() function
describe(("A series of test functions for longestSubstring()"), () => {

    test("longestSubstring('abcabcbb') => 3", () => expect(longestSubstring('abcabcbb')).toBe(3));  // Normal case
    test("longestSubstring('abcabcdef') => 6", () => expect(longestSubstring('abcabcdef')).toBe(6));// Normal case
    test("longestSubstring('aaaaa') => 1", () => expect(longestSubstring('aaaaa')).toBe(1));        // Case of all same letters
    test("longestSubstring(1) => Error", () => (expect(() => longestSubstring(1)).toThrow(Error))); // case of wrong data type
    test("longestSubstring('a') => 1", () => (expect(longestSubstring('a')).toBe(1)));              // case of single character string

})