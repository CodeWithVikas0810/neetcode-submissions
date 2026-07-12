class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

        let seen = new Set()

        for (let i = 0; i < nums.length; i++) {
            if (!seen.has(target - nums[i])) {
                seen.add(nums[i])
            }
            else {
                return [i, nums.indexOf(target - nums[i])]
            }
        }

    };

}
