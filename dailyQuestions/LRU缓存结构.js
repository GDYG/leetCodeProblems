function LRU(operators, k) {
    let ret = [];
    let lru = new Map();
    var temp;
    for (let i = 0; i< operators.length; i++) {
        if (operators[i][0] === 1) {
            if (lru.has(operators[i][1])) {
                lru.delete(operators[i][1])
            } else {
                if (lru.size == k) {
                    const iterator = lru.entries()
                    lru.delete(iterator.next().value[0])
                }
            }
            lru.set(operators[i][1], operators[i][2])
        } else {
            if (lru.has(operators[i][1])) {
                temp = lru.get(operators[i][1])
                lru.delete(operators[i][1])
                lru.set(operators[i][1], temp)
                ret.push(temp)
            } else {
                ret.push(-1)
            }
        }
    }
    return ret
}
console.log(LRU([[1,1,1],[1,2,2],[2,1],[1,3,3],[2,2],[1,4,4],[2,1],[2,3],[2,4]],3))