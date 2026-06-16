class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length-1
        let res = 0
        while(left < right){

            let maxVol = (right-left) * Math.min(heights[left],heights[right])
            res = Math.max(res,maxVol)
            if(heights[left] < heights[right]){
                left++
            }
            else{
                right--
            }
        }
        return res
    }
}
