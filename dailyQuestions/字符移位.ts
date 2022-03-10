const shiftingLetters = (S: string, shift: number[]) => {
    if (!S.length) return S
    if (S.length !== shift.length) return new Error('error')

    let target: string = ''
    let sub: number = 0
    for (let i = S.length - 1; i>=0; i--) {
        sub = sub + shift[i]
        let lastNum = S[i].charCodeAt(0) + sub
        let char = lastNum > 'z'.charCodeAt(0) ? ('a'.charCodeAt(0) - 1 + (lastNum - 'z'.charCodeAt(0))) : lastNum
        let str = String.fromCharCode(char)
        target = str + target
    }
    return target
}
console.log(shiftingLetters("zas", [1,2,3]))