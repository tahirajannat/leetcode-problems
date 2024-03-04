/**
 * @param {number} millis
 * @return {Promise}
 */
/**
 */
async function sleep(millis) {
    await new Promise((resolve) => setTimeout(resolve, millis));
    return 'Sleep complete!';
}

let t = Date.now();
console.log(sleep(200).then(() => console.log(Date.now() - t)));
