class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ret = {}

        for i in range(len(nums)):
            seen = target - nums[i]
            if seen in ret:
                return [ret[seen], i]
            ret[nums[i]]=i