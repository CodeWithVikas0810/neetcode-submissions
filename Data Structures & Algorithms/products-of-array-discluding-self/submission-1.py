class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prefix = [1] * len(nums)
        suffix = [1] * len(nums)
        res    = [1] * len(nums)


        prefix[0] = nums[0]
        suffix[n-1] = nums[n-1]

        for i in range(1,len(nums)):
            prefix[i] = nums[i] * prefix[i-1]

        for i in range(len(nums)-2,-1,-1):
            suffix[i] = nums[i] * suffix[i+1]
        
        res[0] = suffix[1]
        res[n-1] = prefix[n-2]
        for i in range(1,len(nums)-1):
            res[i] = prefix[i-1] * suffix[i+1]
        
        return res