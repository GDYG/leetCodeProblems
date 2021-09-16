let a = 1, b = 1;
function fbnq(n) {
    let fArr = []
    for (let i = 1; i <= n; i++) {
        if (i <= 2) {
            fArr.push(1)
        } else {
            fArr.push(fArr[fArr.length - 1] + fArr[fArr.length - 2])
        }
    }
    return fArr
}

function fbnq1(n) {
    // if (n <= 2) {
    //     return 1
    // }
    // return fbnq1(n - 1) + fbnq1(n - 2)

    function fin(n, a, b) {
        if (n === 1) return a
        if (n === 2) return b
        return fin(n - 1, b, a + b)
    }
    return fin(n, 1, 1)
}

function  fbnq2(n) {
    let a = 1, b = 1;
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b]
    }
    return b
}

console.log(fbnq2(20))


