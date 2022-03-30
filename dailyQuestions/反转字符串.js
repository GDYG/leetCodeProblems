function solve(str) {
    if (str == '') return ''
    let ss = ''
    for (let i = str.length - 1; i >= 0;  i--) { 
        let s = str.charAt(i)
        ss += s
    }
    return ss
}