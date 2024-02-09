var argumentsLength = function (...args) {
    let len = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i] === null) {
            len += 1;
        } else {
            len++;
        }
    }
    return len;
};

const args = [{}, [], null, '3'];
console.log(argumentsLength(...args)); // Output: 4

// const countArrayElements = function (arg) {
//     if (Array.isArray(arg)) {
//         // Include null and empty objects in the array count
//         return (
//             arg.length +
//             arg.filter(
//                 (item) =>
//                     item === null ||
//                     (typeof item === 'object' && Object.keys(item).length === 0)
//             ).length
//         );
//     }
// };

// // Test cases
// console.log(countArrayElements([1, 2, 3])); // Output: 3
// console.log(countArrayElements([{}, null, 5])); // Output: 3 (including {} and null)
// console.log(countArrayElements(null)); // Output: 1 (treat null as an array with one element)
// console.log(countArrayElements({})); // Output: 1 (treat empty object as an array with one element)
// console.log(countArrayElements('not an array')); // Output: 0 (non-array)
