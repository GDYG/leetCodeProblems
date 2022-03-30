function getLongestPalindrome(A) {
    let len = A.length
    if (len == 1) return 1
    let max = 1
    for (let i = 0; i < len - 1; i++) { 
        for (let j = len - 1; j > i; j--) { 
            let str = A.substring(i, j + 1)
            let ret = str
            ret = ret.split('').reverse().join('')
            if (ret == str) { 
                max = str.length
                break
            }
        }
    }
    return max
}