var timeLimit = function (fn, t) {
    return async function (...args) {
        let startTime = Date.now();
        let fnFunction = fn(...args);
        let timeoutPromise = new Promise(function (_, reject) {
            setTimeout(() => {
                reject('Time Limit exceeded');
            }, t);
        });
        return Promise.race([fnFunction, timeoutPromise])
            .then((res) => {
                return {
                    resolved: res,
                    time: Date.now() - startTime,
                };
            })
            .catch((err) => {
                throw err;
            });
    };
};

// Example usage:
let fn = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
};

let inputs = [5];
let t = 150;

const limited = timeLimit(fn, t);
limited(...inputs)
    .then(console.log)
    .catch(console.log); // "Time Limit Exceeded" at t=50ms
