// var maxProfit = function (prices) {
//     let maxProfit = 0;
//     let minPrice = prices[0];
//     for (let sell = 1; sell < prices.length; sell++) {
//         const sellPrice = prices[sell];
//         let profit = sellPrice - minPrice;
//         maxProfit = Math.max(maxProfit, profit);
//         if (sellPrice < minPrice) {
//             minPrice = sellPrice;
//         }
//     }
//     // console.log(maxProfit);
//     return maxProfit;
// };

// const prices = [7, 6, 4, 3, 1];
// console.log(maxProfit(prices));

var maxProfit = function (prices) {
    let maxProfit = 0;
    for (let buy = 0; buy < prices.length; buy++) {
        for (let sell = buy + 1; sell < prices.length; sell++) {
            let profit = prices[sell] - prices[buy];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    console.log(maxProfit);
    return maxProfit;
};

const prices = [3, 8, 1, 4, 7, 5];
console.log(maxProfit(prices));
