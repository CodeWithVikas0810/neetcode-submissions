class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
       
        data = set(nums)
        maxLen = 0

        for nums in data:
            if nums-1 not in data:
                len = 1
                current = nums

                while current+1 in data:
                    len += 1
                    current += 1

                maxLen = max(maxLen,len)
        return maxLen