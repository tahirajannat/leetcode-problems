var findLowestValueArray = function (arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let lowestValue = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowestValue) {
            lowestValue = arr[i];
        }
    }
    return 'Lowest value ' + lowestValue;
};
var my_array = [7, 12, 9, 4, 11];

console.log(findLowestValueArray(my_array));

var findHighestValueArray = function (arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let highestValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highestValue) {
            highestValue = arr[i];
        }
    }

    return 'HJeighst value ' + highestValue;
};

var my_array = [7, 12, 9, 4, 11];

console.log(findHighestValueArray(my_array));
