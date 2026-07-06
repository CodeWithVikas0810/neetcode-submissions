class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    mapsAreEqual(map1, map2) {
        let key1 = Object.keys(map1)
        let key2 = Object.keys(map2)

        if (key1.length !== key2.length) {
            return false
        }

        for (let key of key1) {
            if (map1[key] !== map2[key]) {
                return false
            }
        }
        return true
    }
    checkInclusion(s1, s2) {

        let n1 = s1.length

        let left = 0
        let map1 = {}
        let map2 = {}

        for (let i = 0; i < n1; i++) {
            map1[s1[i]] = (map1[s1[i]] || 0) + 1
        }

        for (let right = 0; right < s2.length; right++) {
            map2[s2[right]] = (map2[s2[right]] || 0) + 1

            if (right - left + 1 == n1) {

                if (this.mapsAreEqual(map1, map2)) {
                    return true
                }
                map2[s2[left]]--


                if (map2[s2[left]] == 0) {
                    delete map2[s2[left]]
                }
                left++
            }


        }
        return false
    }


}
