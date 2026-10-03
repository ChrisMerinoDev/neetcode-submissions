class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
      
      for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        let j = nums.indexOf(complement, 0)

        if (nums[i] + nums[j] === target && i != j) {
            return [i, j]
        }
      }
      return [];
}
}
