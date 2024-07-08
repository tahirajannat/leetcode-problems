function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
        console.log(arr);
    }
}
var arr = [234, 235, 43, 55, 63, 5, 6, 547];
selectionSort(arr);
