var cancellable = function (fn, args, t) {
    const timerId = setTimeout(() => {
        const result = fn(...args);
        const output = { time: t, returned: result };
        const output2 = JSON.stringify(output);
        console.log(JSON.stringify(output));
    }, t);
    return function cancelFn() {
        clearTimeout(timerId);
    };
};

const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelFn = cancellable(fn, args, t);
// console.log(JSON.stringify(output));
