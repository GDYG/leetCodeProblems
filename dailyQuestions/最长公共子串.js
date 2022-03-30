function LCS(str1, str2) {
    let str = ''
    let max = ''
    for (let i = 0; i < str1.length; i++) {
        let s = str1.charAt(i)
        max += s
        if (str2.includes(max)) {
            str = str.length >= max.length ? str : max
        } else { 
            max = max.slice(1)
        }
    }
    return str
}