function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false
    let first: number = nums[0], second: number;
    for (let i = 0; i < nums.length; i++) {
        if (second < nums[i]) return true
        first >= nums[i] ? first = nums[i] : second = nums[i]
    }
    // for (let i = 0; i < nums.length - 2; i++) {
    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             if (nums[i] < nums[j] && nums[j] < nums[k]) {
    //                 return true
    //             }
    //         }
    //     }
    // }
    return false
};

console.log(increasingTriplet([1,2,3]))