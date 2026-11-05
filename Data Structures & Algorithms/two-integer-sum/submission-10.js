class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (indices.has(complement)) {
            return [i, indices.get(complement)]
        }
        
            indices.set(nums[i], i)
    }
    }
}
