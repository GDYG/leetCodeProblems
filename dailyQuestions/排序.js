function MySort(arr) {
    if(!arr.length || arr.length < 2) return arr
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    return arr
}

console.log(MySort([2,3,3,1,4,6,8,5,0]))