var createCounter = function (init) {
    let count = init;
    function increment() {
        count++;
        return count;
    }
    function reset() {
        count = init;
        return count;
    }
    function decrement() {
        count--;
        return count;
    }
    return { increment, reset, decrement };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
