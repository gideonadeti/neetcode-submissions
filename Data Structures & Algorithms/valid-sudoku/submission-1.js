class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Initialize 9 sets for rows, 9 for columns, and 9 for 3x3 boxes
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                // Skip empty slots
                if (val === ".") continue;

                // Calculate wich 3x3 box this cell belongs to
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // If the value is already present in this row, column, or box, it's invalid
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }

                // Document the value across all tracking sets
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }

        return true;
    }
}
