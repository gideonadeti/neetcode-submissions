class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (const str of strs) {
            result += `${str.length}#${str}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            // Find the delimeter starting from position i
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // Extract the length of the upcoming string
            const length = parseInt(str.substring(i, j), 10);

            // Move the pointer past the '#'
            i = j + 1;

            // Extract the string chunk using the known length
            const word = str.substring(i, i + length);

            result.push(word);

            // Shift the pointer past the extracted word
            i += length;
        }

        return result;
    }
}
