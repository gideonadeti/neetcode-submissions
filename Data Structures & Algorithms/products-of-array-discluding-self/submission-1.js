class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n);

        // Prefix pass (Left to Right)
        // Store the product of all elements to the left of i
        let prefix = 1;

        for (let i = 0; i < n; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        // Postfix pass (Right to Left)
        // Multiply the existing prefix products by the product of all elements to the right of i
        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;
    }
}
