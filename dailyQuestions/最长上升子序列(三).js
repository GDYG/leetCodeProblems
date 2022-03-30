function LIS(arr) {
    let len = arr.length
    let ret = []
    for (let i = 0; i < len; i++) {
        let res = []
        let t = i
        while (t < len) { 
            let cur = arr[t]
            if (ret.length && len - t < ret[0].length) return
            if (ret.length && cur >= ret[ret.length - 1][t - i]) return
            if (res.length) {
                if (res[res.length - 1] <= cur) {
                    res.push(cur)
                }
            } else { 
                res.push(cur)
            }
            t++
        }
        console.log(res)
        if(!ret.length) ret.push(res)
        if (ret[0].length > res.length) { 
            ret.length = 0
            ret.push(res)
        }
        if (ret[0].length == res.length) { 
            ret.push(res)
        }
    }
}
LIS([2,1,5,3,6,4,8,9,7])