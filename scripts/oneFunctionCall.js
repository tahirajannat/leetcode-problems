var once = function (fn) {
    let exCount = 0;
    return function (...args) {
        if (exCount > 0) {
            return undefined;
        }
        // for (var i = 0; i < args.length; i++) {
        //     result = result + args[i];
        //     // console.log(args[i])s;
        // }
        exCount++;
        return fn(...args);
    };
};

let fn = (a, b, c) => a * b * c;
let onceFn = once(fn);

console.log(onceFn(5, 7, 4));
console.log(onceFn(2, 3, 6));
console.log(onceFn(4, 6, 8));

onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
