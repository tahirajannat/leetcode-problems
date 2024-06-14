var cancellable = function (fn, args, t) {
    // Initial execution
    let res = fn(...args);
    console.log(JSON.stringify({ time: 0, returned: res }));

    let counter = 1;
    let timer = setInterval(() => {
        let res = fn(...args);
        console.log(JSON.stringify({ time: counter * t, returned: res }));
        counter++;
    }, t);

    let cancelFn = () => {
        clearInterval(timer);
    };

    return cancelFn;
};

// Example usage:
let fn = (x1, x2, x3) => x1 + x2 + x3;
let args = [5, 1, 3];
let t = 50;

let cancelFn = cancellable(fn, args, t);

let cancelT = 180;
setTimeout(() => {
    cancelFn();
    console.log('Function execution canceled.');
}, cancelT);
