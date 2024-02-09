var map = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
};

// let arr = [1, 2, 3];
// let fn = function plusone(n) {
//     return n + 1;
// };
let arr = [1, 2, 3];
let fn = function plusI(n, i) {
    return n + i;
};
// console.log(arr, fn(1));
console.log(map(arr, fn));
