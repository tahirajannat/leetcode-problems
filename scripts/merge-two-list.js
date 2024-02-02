// var mergeTwoLists = function (list1, list2) {
//     const mergeArrays = list1.concat(list2);
//     // const mergeResult = (...mergeArrays)
//     return mergeArrays;
// };

// const list1 = [1, 2, 4],
//     list2 = [1, 3, 4];
// // const list1 = [],
// //     list2 = [];
// // const list1 = [],
// //     list2 = [0];
// console.log(mergeTwoLists(list1, list2));
// var mergeTwoLists = function (list1, list2) {
//     let i1 = 0,
//         i2 = 0;
//     const mergeArrays = list1.concat(list2);

//     return [...mergeArrays].map(() =>
//         i1 === list1.length
//             ? list2[i2++]
//             : i2 === list2.length
//             ? list1[i1++]
//             : list1[i1] < list2[i2]
//             ? list1[i1++]
//             : list2[i2++]
//     );
// };
// console.log(mergeTwoLists([1, 2, 3, 5, 9], [4, 6, 7, 8]));
// var mergeTwoLists = function (list1, list2) {
//     if (!Array.isArray(list1)) {
//         return list2 || [];
//     }

//     if (!Array.isArray(list2)) {
//         return list1 || [];
//     }

//     // Merge both lists
//     for (var i = 0; i < list2.length; i++) {
//         list1.push(list2[i]);
//     }

//     // Bubble sort to sort the merged list
//     for (var i = 0; i < list1.length - 1; i++) {
//         for (var j = 0; j < list1.length - i - 1; j++) {
//             if (list1[j] > list1[j + 1]) {
//                 // Swap elements if they are in the wrong order
//                 let temp = list1[j];
//                 list1[j] = list1[j + 1];
//                 list1[j + 1] = temp;
//             }
//         }
//     }

//     return list1;
// };

// let list1 = [1, 2, 4];
// let list2 = [1, 3, 4];
// console.log(mergeTwoLists(list1, list2));

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
    let list3 = [];
    let i = 0;
    let j = 0;

    for (let n = 0; n < list1.length + list2.length; n++) {
        if (list1[i] <= list2[j] || list2.length < j + 1) {
            list3.push(list1[i]);
            i++;
        } else {
            list3.push(list2[j]);
            j++;
        }
    }
    return list3;
};
console.log(JSON.stringify(mergeTwoLists(list1, list2)));

Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
const arr = [1, 2, 3];
arr.last(); // 3
