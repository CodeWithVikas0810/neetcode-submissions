class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let left = 0
        let map = {}
        let maxFreq = 0
        let ans = 0

        for (let right = 0; right < s.length; right++) {
            map[s[right]] = (map[s[right]] || 0) +1
            maxFreq = Math.max(maxFreq,map[s[right]]) 

            if ((right-left+1 - maxFreq) > k){
                map[s[left]]--
                left++
            }
            ans = Math.max(ans,right-left +1)
        }
        return ans
    }
}
