class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let res = []
        let n = temperatures.length



        for (let i = n - 1; i >= 0; i--) {

            while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop()
            }
            if (stack.length) {
                res[i] = stack[stack.length - 1] - i

            }
            else {
                res[i] = 0
            }
            stack.push(i)

        }
        return res

    }
}
