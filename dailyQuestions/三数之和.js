function threeSum(num) {
    let len = num.length
    if (len < 3) return []
    let res = []
    num.sort((a, b) => a - b)
    for (let i = 0; i < len - 2; i++) { 
        if (num[i] > 0) return res
        
        if (i > 0 && num[i] == num[i - 1]) { 
            continue
        }

        let cur = num[i] 
        let left = i + 1
        let right = len - 1
        while (left < right) { 
            if (cur + num[left] + num[right] == 0) {
                res.push([cur, num[left], num[right]])
                while (left + 1 < right && num[left] == num[left + 1]) {
                    left++
                }
                while (right - 1 > left && num[right] == num[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (cur + num[left] + num[right] > 0) {
                right--
            } else { 
                left++
            }
        }
    }
    return res
}

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))