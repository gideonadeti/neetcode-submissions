class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Base case: Anagrams must be identical in length
        if (s.length !== t.length) {
            return false;
        }

        const count = {};

        // Build character counts using string s
        for (const char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        // Decrement counts using string t
        for (const char of t) {
            // If char doesn't exist or its count drops below 0
            if (!count[char]) {
                return false;
            }

            count[char]--;
        }

        return true;
    }
}
