/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let newList = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = newList.length;
    let mid = Math.floor(len / 2);
    if (len % 2 !== 0) {
        return newList[mid];
    }
    console.log(newList);
    console.log(mid);
    return (newList[mid - 1] + newList[mid]) / 2;
};
let nums1 = [1, 3],
    nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
