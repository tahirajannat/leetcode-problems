// var maxArea = function (height) {
//     let maxHeight = Math.max(...height);
//     let lastHeight = height[height.length - 1];
//     let maxIndex = height.indexOf(maxHeight);
//     let minIndex = height.length - 1;

//     let width = Math.abs(maxIndex - minIndex);
//     let minHeight = Math.min(maxHeight, height[maxIndex]);
//     let area = width * minHeight;
//     // console.log('Max Height:', maxHeight);
//     // console.log('Last Height:', lastHeight);
//     // console.log('Max Index:', maxIndex);
//     // console.log('Last Index:', minIndex);
//     // console.log('Width:', width);
//     // console.log('Min Height:', minHeight);
//     // console.log('Calculated Area:', area);
//     return area;
// };

var maxArea = function (height) {
    let maxArea = 0;

    let left = 0;
    let right = 0;
    let len = height.length;
    for (left = 0; left < len; left++) {
        for (right = left + 1; right < len; right++) {
            let width = right - left;
            let minHeight = Math.min(height[left], height[right]);
            let area = width * minHeight;
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
};

let height = [1, 2, 1];
console.log(maxArea(height));
