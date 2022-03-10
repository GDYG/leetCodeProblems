const minSubArrayLens = (s, nums) => {
    if(!nums.length) return 0
    let start = 0, end = 0, sum = 0, target = Infinity;

    while (start < nums.length) {
        if (sum < s && end < nums.length) {
            sum += nums[end++]
        } else {
            if (sum >= s && target > (end - start)) target = end - start
            sum -= nums[start++]
        }
    }
    return target === Infinity ? 0 : target
}

console.log(minSubArrayLens(1, [1,2,3,4]))