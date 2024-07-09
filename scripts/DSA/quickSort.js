function quickSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let key = arr[i];
        for (var j = i - 1; j >= 0, arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = key;
        console.log('quick sort', arr);
    }
}
var arr = [234, 235, 43, 55, 63, 5, 6, 547];
quickSort(arr);
