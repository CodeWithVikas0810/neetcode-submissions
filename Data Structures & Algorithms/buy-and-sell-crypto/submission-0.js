class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let min = prices[0]
        for (let i = 0; i < prices.length - 1; i++) {
            if (min < prices[i + 1]) {
                profit = Math.max(profit, prices[i + 1] - min)
            }
            else {
                min = prices[i+1]
            }
        }
        return profit
    }
}
