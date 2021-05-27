function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    let x: number=0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (target < matrix[i][j]) {
                x = j
                break
            }
            if (target == matrix[i][j]) {
                return true
            }
        }
        for (let k = 0; k < x; k++) {
            if (matrix[i][k] == target) {
                return true
            }
        }
    }
    return false
};

console.log(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 20))