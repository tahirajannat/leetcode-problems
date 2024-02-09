var reduce = function (nums, fn, init) {
    let accum = init;
    let numResult;
    if (nums.length == 0) {
        return (numResult = accum);
    } else {
        for (let i = 0; i < nums.length; i++) {
            accum = fn(accum, nums[i]);
        }
        console.log('first accumulator', accum);
    }

    return accum;
};
let nums = [];
// let fn = function sum(accum, curr) {
//     return accum + curr;
// };
let init = 25;
// let fn = function sum(accum, curr) {
//     return accum + curr * curr;
// };

let fn = function sum(accum, curr) {
    return 0;
};
console.log(reduce(nums, fn, init));
