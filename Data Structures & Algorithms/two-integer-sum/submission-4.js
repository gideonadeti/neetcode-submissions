class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Map stores number -> its index
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const complement = target - current;

            // If we've already seen the complement, return their indices
            if (seen.has(complement)) {
                return [seen.get(complement), i];
            }

            // Otherwise, store the current number and its index
            seen.set(current, i)
        }

        // Fallback, though constraints guarantees that only one valid answer exists
        return []
    }
}
