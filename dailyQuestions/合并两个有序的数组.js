function merge(A, m, B, n) {
    for (let i of B) { 
        A.push(i)
    }
    A.sort((a, b => a- b))
    return A
}