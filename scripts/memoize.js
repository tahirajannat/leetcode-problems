/**
 * @param {Function} fn
 * @return {Function}
 */
// function memoize(fn) {
//     let cache = [];
//     let inputs = [];

//     return function (...args) {
//         let result = [];
//         let index = 0;
//         if (!inputs.includes(JSON.stringify(args))) {
//             inputs.push(JSON.stringify(args));
//             result = fn(...args);
//             cache.push(result);
//             return result;
//         } else {
//             index = inputs.indexOf(JSON.stringify(args));
//             return cache[index];
//         }
//     };
// }
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function memoize(fn) {
    let cache = [];
    return function (...args) {
        // cache.push(args);
        if (!cache[args]) {
            return (cache[args] = fn(...args));
        } else {
            return cache[args];
        }
    };
}

let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//     callCount += 1;
//     return a + b;
// });
const memoizedFn = memoize(function (n) {
    callCount += 1;
    return n * factorial(n - 1); // Assuming factorial is defined elsewhere
});

console.log(memoizedFn(5)); // Example usage
console.log(callCount); // Check call count
