class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = 999
        for(let i=0;i<nums.length;i++){
            if(nums[i] < min ){
                min = nums[i]
            }
        }
        return min
    }
}
