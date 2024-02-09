var compose = function (functions) {
    return function (x) {
        let result = x;

        for (var i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
fn(4);
console.log(fn(4));
