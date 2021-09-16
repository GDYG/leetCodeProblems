function quickSort(arr) {
    const curr = arr[0];
    const left = [];
    const right = [];
    if (arr.length < 2) return arr
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < curr) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([curr], quickSort(right))
}

function quickSort2(arr) {
    if (arr.length < 2) return arr
    let curr = arr.splice([Math.floor(arr.length/2)], 1);
    let left = [], right = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < curr[0]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort2(left).concat(curr, quickSort2(right))
}

console.log(quickSort2([2, 1, 4, 3, 6, 5, 9, 35, 55, 323]))
