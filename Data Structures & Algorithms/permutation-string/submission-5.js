class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let left = 0
        let map = {}
        let window = {}

        for (let i = 0; i < s1.length; i++) {
            map[s1[i]] = (map[s1[i]] || 0) + 1
        }

        for (let right = 0; right < s2.length; right++) {

            window[s2[right]] = (window[s2[right]] || 0) + 1




            if (right - left + 1 == s1.length) {
                if (this.mapsAreEqual(map, window)) {
                    return true
                }
                
                window[s2[left]]--

                if (window[s2[left]] == 0) {
                    delete window[s2[left]]
                }
                left++
            }

        }
        return false

    }

    mapsAreEqual(map1, map2) {
        let key1 = Object.keys(map1)
        let key2 = Object.keys(map2)

        if (key1.length != key2.length) {
            return false
        }

        for (let key of key1) {
            if (map1[key] != map2[key]) {
                return false
            }
        }
        return true

    }
}
