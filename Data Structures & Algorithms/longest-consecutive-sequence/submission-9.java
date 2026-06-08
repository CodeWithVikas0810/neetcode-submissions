class Solution {
    public int longestConsecutive(int[] nums) {
        int count =1;
        int newCount=0;
        if(nums.length ==0){
            return 0;
        }
       
        HashSet<Integer> set = new HashSet<>();
        for(int i:nums){
            set.add(i);
        }
        List<Integer> list = new ArrayList<>(set);
        Collections.sort(list);

        for(int i=0;i<list.size()-1;i++){
            if(list.get(i+1)-list.get(i) == 1){
                count++;
            }
            else{
                newCount = Math.max(newCount,count);
                count=1;
            }
        }
        return Math.max(newCount,count);
    }
}
