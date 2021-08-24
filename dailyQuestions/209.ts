function minSubArrayLen(target: number, nums: number[]): number {
    if (!nums.length) return 0
    let start: number = 0, end: number = 0, sum: number = 0, length: number = Infinity;
    while (start < nums.length) {
        if (sum < target && end < nums.length) {
            sum += nums[end++]
        } else {
            if (sum >= target && length > (end - start)) length = end - start
            sum -= nums[start++]
        }
    }
    return length === Infinity ? 0 : length
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))