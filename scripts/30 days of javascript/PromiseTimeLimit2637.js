/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
            fn(...args)
                .then((result) => {
                    clearTimeout(timer);
                    resolve(result);
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err);
                });
        });
    };
};
let fn = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
};

let inputs = [5];
let t = 50;
const wrappedFn = timeLimit(fn, t);

wrappedFn(...inputs)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
