/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // let newList = [...list1, ...list2];
    let newList = [];
    for (var i = 0; i < list1.length; i++) {
        newList.push(list1[i]);
    }
    for (var i = 0; i < list2.length; i++) {
        newList.push(list2[i]);
    }
    // console.log(newList);

    return newList.sort(function (a, b) {
        return a - b;
    });
};

let list1 = [1, 2, 4],
    list2 = [1, 3, 4];
mergeTwoLists(list1, list2);
console.log(mergeTwoLists(list1, list2));
