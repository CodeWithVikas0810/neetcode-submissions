class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        
        let maxPile = Math.max(...piles)
        let result = this.binarySearch(piles,maxPile, h)
        return result
    }
    binarySearch(piles,right, h) {
        let left = 1
        
        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2)
            let totalHours = 0

            for (let pile of piles){
                totalHours += Math.ceil(pile/mid)
            }
            if(totalHours <= h){
                right = mid
            }
            else {
                left = mid+1
            }
        }
        return left
    }
}
