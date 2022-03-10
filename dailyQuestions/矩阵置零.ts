const setZeroe = (matrix: number[][]): number[][] => {
    let row = new Set()
    let col = new Set()
    matrix.forEach((v, i) => {
        v.forEach((n, b) => {
            if (n === 0) {
                row.add(i)
                col.add(b)
            }
        })
    })
    console.log(row, col)
    matrix.forEach((a, b) => {
        a.forEach((c, d) => {
            if(row.has(b) || col.has(d)) matrix[b][d] = 0
        })
    })
    return [...matrix]
}

console.log(setZeroe([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
))