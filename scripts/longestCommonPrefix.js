function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }
    let prefix = '';
    const firstString = strs[0];
    for (let i = 0; i < firstString.length; i++) {
        const prefixChar = firstString[i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== prefixChar) {
                console.log(strs[j][i]);
                // return prefix;
            }
        }
        prefix += prefixChar;
    }
    return prefix;
}

// const strs = ['dog', 'racecar', 'car'];
const strs = ['flower', 'flow', 'flight'];
console.log('ptrefix: ', longestCommonPrefix(strs)); // Output: "fl" for
