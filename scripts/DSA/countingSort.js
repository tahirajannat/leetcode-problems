function countingSort(arr) {
    const maxValue = Math.max(...arr);
    console.log(maxValue);
    // Step 2: Create a new array with the length of maxValue
    const newArray = new Array(maxValue);

    console.log(newArray);
    console.log(newArray.length);
}
const inputArray = [4, 3, 12, 1, 5, 5, 3, 9];
countingSort(inputArray);
