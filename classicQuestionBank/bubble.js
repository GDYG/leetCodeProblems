//冒泡排序
function bubble(arr) {
    if (arr < 2) return arr
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+ 1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

function bubbleSort(arr, callback) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (callback(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([2, 1, 43, 5, 4, 7, 6], (a, b) => b - a))


