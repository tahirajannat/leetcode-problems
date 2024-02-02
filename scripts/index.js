var romanToInt = function (s) {
    const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currSymbol = s[i];
        const currValue = romanNumerals[currSymbol];
        const nextSymbol = s[i + 1];
        const nextValue = romanNumerals[nextSymbol];
        if (nextValue > currValue) {
            result += nextValue - currValue;
            i++;
        } else {
            result += currValue;
        }
    }

    return result;
};
console.log(romanToInt('MCMXCIV'));
