var containsDuplicate = function (nums) {
    let numSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            return true; // Found a duplicate
        }

        numSet.add(nums[i]);
    }

    return false; // No duplicates found
};

const nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
