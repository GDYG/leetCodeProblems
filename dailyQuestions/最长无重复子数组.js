function maxLength( arr ) {
    let max = 0;
    let str = [];
    for (let i = 0; i < arr.length; i++) { 
        let index = str.indexOf(arr[i])
        if (index != -1) { 
            str.splice(0, index + 1)
        }
        str.push(arr[i])
        max = Math.max(str.length, max)
    }
    return max;
}