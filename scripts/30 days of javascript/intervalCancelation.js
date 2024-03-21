var cancellable = function (fn, args, t) {
    const timerId = setTimeout(() => {
        const result = fn(...args);
        // const output = { time: t, returned: result };
        for (let i = 0; i < args.length; i++) {
            const output = { time: t + i, returned: result };

            console.log(JSON.stringify(output));
        }
        // const output2 = JSON.stringify(output);
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
