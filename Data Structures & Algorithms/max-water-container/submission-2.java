class Solution {
    public int maxArea(int[] heights) {
     
     int s=0;
     int e = heights.length-1;
     int maxz=0;
     while(s<e){
        maxz = Math.max(maxz,(e-s) * Math.min(heights[s],heights[e]));
        if(heights[s] < heights[e]){
            s++;
        }
        else{
            e--;
        }
     }
     return maxz;

    }
}
