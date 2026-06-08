class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        res = []
        count = {}
        for i in nums:
            count[i] = count.get(i,0) + 1
        count_sorted = sorted(count.items(), key= lambda x: x[1], reverse = True)
        for key,val in count_sorted:
            if len(res) < k:
                res.append(key)
        return res
