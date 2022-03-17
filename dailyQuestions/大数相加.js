function solve(s, t) {
    let res = []
    s = s.split('')
    t = t.split('')
    let add = 0;
    if (s.length < t.length) {
        let arr = new Array(t.length - s.length).fill('0')
        s = [...arr, ...s]
    } else if (s.length > t.length) { 
        let arr = new Array(s.length - t.length).fill('0')
        t = [...arr, ...t]
    }
    for (let i = s.length - 1; i >= 0; i--) {
        let num = parseInt(s[i]) + parseInt(t[i]) + add
        add = num >= 10 ? 1 : 0
        let ret = num >= 10 ? num - 10 : num
        console.log(ret)
        res.unshift(`${ret}`)
    }

    if (add > 0) { 
        res.unshift(`${add}`)
    }

    return res.join('')
}

console.log(solve("9","99999999999999999999999999999999999999999999999999999999999994"))