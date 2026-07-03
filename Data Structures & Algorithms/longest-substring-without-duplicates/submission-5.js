class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        
        let st = 0
        let maxCount = 0

        while (st < s.length) {
            let count = 0
            let set = new Set()
            for (let e = st; e < s.length; e++) {
                if (!set.has(s.charAt(e))) {
                    set.add(s.charAt(e))
                    count++
                    maxCount = Math.max(maxCount, count)
                }
                else {
                    break
                }
            }
                st++
        }
        return maxCount
    }
}
