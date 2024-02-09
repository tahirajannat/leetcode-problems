var expect = function (val) {
    function toBe(compair) {
        if (val === compair) {
            return true;
        } else {
            throw new Error('Not Equal');
        }
    }

    function notToBe(compair) {
        if (val !== compair) {
            return true;
        } else {
            throw new Error('Equal');
        }
    }

    return { toBe, notToBe };
};
// console.log(toBe(5));
console.log(expect(5).toBe(5));
try {
    console.log(expect(5).toBe(null)); // Should throw an error 'Not Equal'
} catch (error) {
    console.error(error.message);
}
try {
    console.log(expect(5).notToBe(null)); // Should not throw an error
} catch (error) {
    console.error(error.message);
}
