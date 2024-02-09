var filter = function (arr, fn) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            filteredArray.push(arr[i]);
        } else if (fn(arr[i], i)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
};

// let arr = [0, 10, 20, 30];
// let arr = [1, 2, 3];
// let fn = function greaterThan10(n) {
//     return n > 10;
// };
// let fn = function firstIndex(n, i) {
//     return i === 0;
// };
let arr = [-2, -1, 0, 1, 2];
let fn = function plusOne(n) {
    return n + 1;
};

let result = filter(arr, fn);
console.log('filteredArray is', result);
