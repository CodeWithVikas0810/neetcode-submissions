class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0
        let m = matrix.length 
        let n = matrix[0].length

        let end = m * n - 1

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2)
            let row = Math.floor(mid/n)
            let col = mid % n
            if (matrix[row][col] == target){
                return true
            }
            else if(matrix[row][col] > target){
                end = mid-1
            }
            else{
                start = mid+1
            }
        }
        return false
    }
}
