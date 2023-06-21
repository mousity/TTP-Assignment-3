let {reverseString, isPalindrome} = require("./stringFunctions");

// Testing cases for our reverse function
describe(("Series of tests for reversing our string"), () => {
    test(("reverse('cat') => tac"), () => (expect(reverseString('cat')).toBe('tac')));
    test(("reverse(1) => /'Not a String/'"), () => (expect(reverseString(1)).toBe('Not a String')));
    test(("reverse('grilled cheese') => eseehc dellirg"), () => (expect(reverseString('grilled cheese')).toBe('eseehc dellirg')));
    test(("reverse('MouSe') => eSuoM"), () => (expect(reverseString('MouSe')).toBe('eSuoM')));
})

// Testing cases for our palindrome function
describe(("Series of tests for determining if our string is a palindrome"), () => {
    test(("isPalindrome('cat') => false"), () => (expect(isPalindrome('cat')).toBe(false)));
    test(("isPalindrome('racecar') => true"), () => (expect(isPalindrome('racecar')).toBe(true)));
    test(("isPalindrome('RaceCar') => true"), () => (expect(isPalindrome('RaceCar')).toBe(true)));
    test(("isPalindrome(1) => false"), () => (expect(isPalindrome(1)).toBe(false)));
}) 