class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
       
        data = set(nums)
        maxCount= 0

        if len(nums) == 0:
            return 0

        for nums in data:
            if nums-1 not in data:
                current = nums
                count = 1
            
                while current+1 in data:
                    count += 1
                    current = current +1 
            
                maxCount = max(maxCount,count)
        return maxCount