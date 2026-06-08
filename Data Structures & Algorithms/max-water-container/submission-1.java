class Solution {
    public int maxArea(int[] heights) {
     int s =0;
     int e= heights.length-1;
     int total=0;
     int max=0;

    while(s<e){
        total = (e-s) * Math.min(heights[s],heights[e]);
        max = Math.max(max,total);
        if(heights[s] > heights[e]){
            e--;
        }
        else{
            s++;
        }

    }
    return max;

    }
}
