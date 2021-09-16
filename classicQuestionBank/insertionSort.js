//插入排序

function insertionSort1(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(i === 0) newArr.push(arr[i])
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] > arr[i]) {
                newArr.splice(j, 0, arr[i])
                break
            } else {
                if (j === newArr.length - 1) {
                    newArr.push(arr[i])
                    break
                }
            }
        }
    }
    return newArr
}

function insertionSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    const temp = arr[i];
    let preIndex = i - 1;

    while (arr[preIndex] > temp) {
        console.log(arr[preIndex + 1], arr[preIndex], preIndex)
        arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    arr[preIndex + 1] = temp;
    console.log(temp)
  }

  return arr;
}
  

console.log(insertionSort([2,1,4,3,5,4,6]))
