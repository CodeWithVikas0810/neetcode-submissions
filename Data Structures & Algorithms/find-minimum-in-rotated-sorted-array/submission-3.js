class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let s = 0
        let e = nums.length - 1
        if (nums[s] < nums[e]) {
            return nums[s]
        }


        while (s < e) {
            let mid = Math.floor(s + (e - s) / 2)
            if (nums[mid] > nums[e]) {
                s = mid + 1
            }
            else {
                e = mid
            }
        }
        return nums[s]
    }
}
