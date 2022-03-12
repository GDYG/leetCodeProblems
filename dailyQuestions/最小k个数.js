function GetLeastNumbers_Solution(input, k) {
    if (!input.length || k == 0) return []
    if(input.length <= k) return input
    input.sort((a, b) => a - b)
    return input.slice(0, k)
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],4 ))
