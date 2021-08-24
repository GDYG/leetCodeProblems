function setZeroes(matrix: number[][]): void {
    var col = new Set()
    var row = new Set()
    matrix.forEach((item, w) => {
        item.forEach((v, i) => {
            if (v == 0) {
                row.add(w)
                col.add(i)
            }
        })
    })
    matrix.forEach((a, b) => {
        a.forEach((c, d) => {
            if(row.has(b) || col.has(d)) matrix[b][d] = 0
        })
    })
};

setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ])
