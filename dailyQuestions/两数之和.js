function twoSum(numbers, target) {
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i]
        if (arr[diff] == undefined) {
            arr[numbers[i]] = i
        } else {
            return [arr[diff] + 1, i + 1].sort((a, b) => a - b)
        }
    }
}
console.log(twoSum([3,2,4],6))