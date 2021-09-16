function heapSort(arr) {
    let size = arr.length
    
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(arr, i, size);
    }

    for (let i = size - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        size -= 1
        heapify(arr, 0, size)
    }
    console.log(arr)
}

function heapify(arr, index, size) {
    let largest = index //最大值, 先把父节点初始化为最大值
    let left = 2 * largest + 1 //左子节点
    let right = 2 * largest + 2 //右子节点
    
    if (left < size && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]]
        heapify(arr, largest, size)
    }
}
export const a = 'name'
export const b = 2
export default {heapSort}
// heapSort([2, 3, 4, 5, 2, 4, 5, 3, 7, 78])

