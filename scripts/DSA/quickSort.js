function quickSortFirstElPivot(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [
        ...quickSortFirstElPivot(leftArr),
        pivot,
        ...quickSortFirstElPivot(rightArr),
    ];
}

var arr = [234, 235, 43, 55, 63, 5, 6, 547];
console.log(quickSortFirstElPivot(arr));
