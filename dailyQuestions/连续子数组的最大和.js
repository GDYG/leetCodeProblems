function FindGreatestSumOfSubArray(array)
{
    let len = array.length
    if (len <= 1) return array
    
    let max = array[0] //当前数组和的最大值
    let res = array[0]  //当前array[i]的数组的最大值
    for (let i = 1; i < len; i++) { 
        max = Math.max(array[i] + max, array[i])
        res = Math.max(res, max)
    }

    return res
}