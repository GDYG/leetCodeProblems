function getWinner(arr: number[], k: number): number {
    let max:number = arr[0], num:number = 0
    // for (let i = 1; i < arr.length; i++) {
    //     if (max < arr[i]) {
    //         max = arr[i]
    //         let a1: number = arr.splice(i - 1, 1)[0]
    //         arr.push(a1)
    //         num = 1
    //         i--
    //     } else {
    //         num += 1
    //         let a2:number = arr.splice(i, 1)[0]
    //         arr.push(a2)
    //         i--
    //     }
    //     if (num == k) {
    //         break;
    //     };
    // }
    do {
        if (max < arr[1]) {
            max = arr[1]
            let a1: number = arr.splice(0, 1)[0]
            arr.push(a1)
            num = 1
        } else {
            let a2:number = arr.splice(1, 1)[0]
            arr.push(a2)
            num += 1
        }
    } while(num !== k)
    console.log(max)
    return max
};

getWinner([1,11,22,33,44,55,66,77,88,99], 1000000000)