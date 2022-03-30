function sqrt(x) {  
    if (x == 1) return 1
    let left = 0
    let right = x
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(mid * mid <= x && (mid + 1) * (mid + 1) > x) return mid
        if (mid * mid > x) { 
            right = mid - 1
        } else { 
            left = mid + 1
        }
    }
    return 0
}

console.log(sqrt(5))