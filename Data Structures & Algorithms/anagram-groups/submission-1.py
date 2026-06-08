class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        group  = {}

        for ch in strs:
            cha = "".join(sorted(ch))

            if cha not in group:
                group[cha] = []
            
            group[cha].append(ch)

        return list(group.values())