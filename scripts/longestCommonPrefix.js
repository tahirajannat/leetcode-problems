// function longestCommonPrefix(strs) {
//     if (strs.length === 0) {
//         return '';
//     }

//     let result = '';
//     const firstStr = strs[0];

//     for (let i = 0; i < firstStr.length; i++) {
//         const char = firstStr[i];

//         for (let j = 1; j < strs.length; j++) {
//             if (i >= strs[j].length || strs[j][i] !== char) {
//                 return result;
//             }
//         }

//         result += char;
//     }

//     return result;
// }
// console.log(longestCommonPrefix(strs)); // Output: "fl"

const strs = ['flower', 'flow', 'flight'];
//     if (strs.length === 0) {
//         return '';
//     }
let result = '';
const firstStr = strs[''];

for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i];
    for (let j = 0; j < strs.length; j++) {
        if (i >= strs[j].length || strs[j][i] !== char) {
            return result; // Return the result when the characters don't match
        }
    }
    result += char; // Add the character to the result
}

console.log(result); // Output: "fl"
