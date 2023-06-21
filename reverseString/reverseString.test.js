let {reverseString} = require('./reverseString');

// Beginning of tests
describe(("Testing of many cases for reverseString()"), () => {

    test("reverseString('mouse') => 'esuom'", () => expect(reverseString('mouse')).toBe('esuom'));                          // Normal case
    test("reverseString('white mouse') => 'esuom etihw'", () => expect(reverseString('white mouse')).toBe('esuom etihw'));  // case with spaces
    test("reverseString('MaNy MiCe') => 'eCiM yNaM'", () => expect(reverseString('MaNy MiCe')).toBe('eCiM yNaM'));          // case with capital letters
    test("reverseString(1) => 'Not a String'", () => expect(reverseString(1)).toBe('Not a String'));                        // case with wrong data type

})