var timeLimit = function (fn, t) {
    return async function (...args) {};
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
console.log('hello world');
