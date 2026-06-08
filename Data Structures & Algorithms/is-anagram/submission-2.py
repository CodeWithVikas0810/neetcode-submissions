class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hashMap1 = {}
        hashMap2 = {}

        for i in s:
            hashMap1[i] = hashMap1.get(i,0) + 1
        for i in t:
            hashMap2[i] = hashMap2.get(i,0) +1
        
        return hashMap1 == hashMap2
        