class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();
        
        // Track counts of each number
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
        
        // Create buckets where index represents frequency and value is an array of numbers with that frequency
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        // Populate buckets based on frequency
        for (const [num, freq] of countMap.entries()) {
            buckets[freq].push(num);
        }

        const result = [];

        // Iterate from highest frequency bucket down to 0
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                for (const num of buckets[i]) {
                    result.push(num);

                    // Stop the moment we have collected k elements
                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }

        return result;
    }
}
