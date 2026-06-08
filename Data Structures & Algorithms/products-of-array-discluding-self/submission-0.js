class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let mul = 1;
        let zeroCount = 0;

        for (let num of nums) {
            if (num === 0) {
                zeroCount++;
                if (zeroCount > 1) break;
            } else {
                mul *= num;
            }
        }

      
        return nums.map(item => {
            if (zeroCount > 1) {
                return 0;
            }
            if (zeroCount === 1) {
                return item === 0 ? mul : 0;
            }
            return mul / item;
        });
    }
}
