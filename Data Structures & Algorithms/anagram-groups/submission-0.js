class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res ={}
        for(let val of strs){
             let word = val.split('').sort().join('')
             if(!res[word]){
                res[word] = []
             }
             res[word].push(val)
        }
        return Object.values(res)

    }

}
