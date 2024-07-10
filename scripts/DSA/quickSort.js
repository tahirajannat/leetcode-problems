var arr = [234, 235, 43, 55, 63, 5, 6, 547];
let middleArray = [3, 7, 2, 5, 0, 4, 6, 8];
let lastArray = [3, 7, 235, 43, 55, 0, 4, 6, 8];

//First element as pivot
function quickSortFirstElPivot(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    // return [
    //     ...quickSortFirstElPivot(leftArr),
    //     pivot,
    //     ...quickSortFirstElPivot(rightArr),
    // ];
    return quickSortFirstElPivot(leftArr).concat(
        pivot,
        quickSortFirstElPivot(rightArr)
    );
}

console.log('First', quickSortFirstElPivot(arr));

//Middle element as pivot
function quickSortMiddleElPivot(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    const pivot = arr[Math.floor(arr.length / 2)];
    // console.log('Middle pivot: ' + pivot);

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // return quickSortMiddleElPivot(left).concat(
    //     pivot,
    //     quickSortMiddleElPivot(right)
    // );
    return [
        ...quickSortMiddleElPivot(left),
        pivot,
        ...quickSortMiddleElPivot(right),
    ];
}

console.log('Middle', quickSortMiddleElPivot(middleArray));

//Last element as pivot
function quickSortLastElPivot(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    const pivot = arr[arr.length - 1];
    // console.log('Last pivot: ' + pivot);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSortLastElPivot(left).concat(
        pivot,
        quickSortLastElPivot(right)
    );
}

console.log('Last', quickSortLastElPivot(lastArray));

//Random element as pivot
function quickSortRandomElPivot(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    let equal = [];

    const pivot = arr[Math.floor(Math.random() * arr.length)];
    // console.log('Random pivot: ' + pivot);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }
    return [
        ...quickSortRandomElPivot(left),
        ...equal,
        ...quickSortRandomElPivot(right),
    ];
}

console.log('Random', quickSortRandomElPivot(arr));
