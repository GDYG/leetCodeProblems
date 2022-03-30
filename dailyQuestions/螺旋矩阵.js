function spiralOrder(matrix) {
    if (!matrix.length) return matrix
    let res = []
    let t = 0, r = 0, b = 0, l = 0;
    let len1 = res.length, len2 = matrix.length * matrix[0].length;
    let len = matrix[0].length
    while (len1 >= len2) { 
        for (let i = l; i < matrix[t].length - l - r; i++) { 
            res.push(matrix[t][i])
        }
        t += 1
        for (let i = t; i < matrix.length - t - b; i++) { 
            res.push(matrix[i][len - 1 - r])
        }
        r += 1
        for (let i = len - 1 - r; i >= l; i--) { 
            res.push(matrix[matrix.length-b][i])
        }
        b += 1
        for (let i = matrix.length - b - 1; i >= matrix.length - 1 - t; i--) { 
            res.push(matrix[i][r])
        }
        r += 1
    }
    console.log(res)
    return res
}