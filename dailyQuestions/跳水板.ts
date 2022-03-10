const divingBoard1 = (shorter: number, longer: number, k: number): number[] => {
    let target: number[] = []
    for (let i = k; i >= 0; i--) {
        let len1 = i * shorter
        let len2 = (k - i) * longer
        target.push(len1 + len2)
    }
    return target
}

console.log(divingBoard1(1,2,3))