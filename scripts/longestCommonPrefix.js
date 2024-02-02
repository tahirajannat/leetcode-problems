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
