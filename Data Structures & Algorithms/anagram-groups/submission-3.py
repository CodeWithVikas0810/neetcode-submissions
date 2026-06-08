class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        group = {}
        
        for word in strs:
            ch = "".join(sorted(word))

            if ch not in group:
                group[ch] = []
            group[ch].append(word)
        
        return list(group.values())
