const addBinary = (a, b) => {
    if (a.length > b.length) {
        b = b.padStart(a.length, 0)
    } else {
        a = a.padStart(b.length, 0)
    }

    let add = 0
    let target = ''
    for (let i = a.length - 1; i >= 0; i--) {
        let res = Number(a[i]) + Number(b[i]) + add
        add = 0
        if (res >= 2) {
            target = `0${target}`
            add += 1
        } else {
            target = `${res}${target}`
        }
    }
    if(add) target = `1${target}`
    return target
}

console.log(addBinary('1010', '1011'))