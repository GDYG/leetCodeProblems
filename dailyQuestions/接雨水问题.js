function maxWater(arr) {
    let len = arr.length
    if(len < 3) return 0
    let res = 0
    let left = 0
    let right = len - 1
    while (left < right && arr[left] <= arr[left + 1]) { 
        left++
    }
    while (left < right && arr[right] <= arr[right - 1]) { 
        right--
    }

    while (left < right) { 
        let leftval = arr[left]
        let rightval = arr[right]
        if (leftval <= rightval) {
            while (left < right && leftval >= arr[++left]) { 
                res += leftval - arr[left]
            }
        } else { 
            while (left < right && arr[--right] <= rightval) { 
                res += rightval - arr[right]
            }
        }
    }
    return res
}