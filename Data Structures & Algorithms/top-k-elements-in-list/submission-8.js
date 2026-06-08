class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length == k){
            return nums
        }
        let ans = {}
        let z = []
        for (let i of nums) {
            if(!ans[i]){
                ans[i] = 0
            }
            ans[i] +=1
        }
        const sorted = Object.entries(ans).sort((a,b)=>b[1]-a[1]).slice(0,k)
        return sorted.map(entry => Number(entry[0]))
    }
}
