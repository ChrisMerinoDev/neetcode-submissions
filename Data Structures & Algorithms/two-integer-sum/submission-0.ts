class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
      const map = new Map<number, number>();
        
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i]

            if (map.has(complement)) {
               const j = map.get(complement) as number
                return [j, i]
            } 
            map.set(nums[i], i);
        }
        return [];
    }
}
