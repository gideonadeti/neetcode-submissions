class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sublists = new Map();

        for (const str of strs) {
            // Create a frequency array for the 26 lowercase English letters
            const count = Array(26).fill(0);

            for (const char of str) {
                // Find the index using ASCII subtraction
                // 97 is charCode for 'a'
                const index = char.charCodeAt(0) - 97;
                count[index]++;
            }

            // Convert the array to a string key
            const key = count.join(",");

            // If the key doesn't exist in the sublists, initialize it with an empty array
            if (!sublists.has(key)) {
                sublists.set(key, []);
            }

            // Push the original string into its corresponding anagram group
            sublists.get(key).push(str);
        }

        return Array.from(sublists.values());
    }
}
