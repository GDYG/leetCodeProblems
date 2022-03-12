function findKth(a, n, K) {
    const dfs = (b) => {
        if(b.length <= 1) return b
        let mid = b.splice(Math.floor(b.length / 2), 1)
        let left = []
        let right = []
        for (let i = b.length - 1; i >= 0; i--) {
            if (b[i] > mid) {
                left.push(b[i])
            } else {
                right.push(b[i])
            }
        }
        return dfs(left).concat(mid, dfs(right))
    }
    let ret = dfs(a)
    return ret[K - 1]
}

console.log(findKth([1,3,5,2,2],5,3))