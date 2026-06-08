class Solution {
    public int[] twoSum(int[] numbers, int target) {
     Map<Integer,Integer> map = new HashMap<>();

        for(int i=0;i<numbers.length;i++){
            map.put(numbers[i],i+1);
        }
        for (int i=0;i<numbers.length;i++){
            int val = target-numbers[i];
            if(map.containsKey(val)){
                int idx = map.get(val);
                return new int[]{i+1,idx};
            }

        }
    return new int [] {-1,-1};
    } 
}
