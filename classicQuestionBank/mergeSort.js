function mergeSort(arr) { 
    let len = arr.length;
    if (len < 2) return arr;
    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {  
    let res = []
    let i = 0, j = 0;
    let s = 0;
    while (i < left.length && j < right.length) { 
        res[s++] = left[i] <= right[j] ? left[i++] : right[j++]
    }

    while (i < left.length) { 
        res[s++] = left[i++]
    }
    while (j < right.length) { 
        res[s++] = right[j++]
    }
    return res
} 


console.log(mergeSort([2,1,3,4,2,4,5,3,9,8,7,6,0]))