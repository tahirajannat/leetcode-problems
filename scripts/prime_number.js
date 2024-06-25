var timeLimit = function (number) {
    let limit = Math.sqrt(number) + 1;
    let i;
    for (i = 2; i * i <= number; i++) {}
    // return limit;
    if (limit % i === 0) {
        console.log('first time limit', i);
    }
};
let number = 100;
console.log(timeLimit(number));
