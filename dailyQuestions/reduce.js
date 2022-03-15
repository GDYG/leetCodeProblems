Array.prototype._reduce = function(cb, initValue) { 
    let that = this
    let prev = initValue || that[0]
    let index = initValue ? 0 : 1;
    while (index < that.length) { 
        prev = cb(prev, that[index], index++, that)
    }
    return prev
}

let arr = [1,2,3,4,5]
let ret = arr._reduce((prev, next, index, arr) => { 
    console.log(prev, next, index, arr)
    return prev + next
})
console.log(ret)