// /**
//  * @param {Promise} promise1
//  * @param {Promise} promise2
//  * @return {Promise}
//  */
// var addTwoPromises = async function (promise1, promise2) {
//     return (await promise1) + (await promise2);
// };

// // (promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))),
// //     (promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60)));
// (promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50))),
//     (promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30)));
// console.log(addTwoPromises(promise1, promise2));

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

var addTwoPromises = async function (promise1, promise2) {
    const [result, timeout] = await Promise.all([promise1, promise2]);
    return result + timeout;
};

(promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))),
    (promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60)));
// (promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50))),
//     (promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30)));
console.log(addTwoPromises(promise1, promise2));
