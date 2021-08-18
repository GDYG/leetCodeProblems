// 给你个整数数组 arr，其中每个元素都 不相同。

// 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
function minimumAbsDifference(arr: number[]): number[][] {
    let list: number[][] = []
    for (let i = arr.length - 2; i >=0; i--) {
        for (let j = arr.length - 1; j >=i+1; j--) {
            if (arr[i] > arr[j]) {
                let num: number = arr[i]
                arr[i] = arr[j]
                arr[j] = num
            }
        }
    }
    let num:number = Math.abs(arr[0] - arr[1])
    for (let i = 0; i < arr.length - 2; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) < Math.abs(arr[i + 1] - arr[i + 2])) {
            if (Math.abs(arr[i] - arr[i + 1]) <= num) {
                list.push([arr[i], arr[i + 1]])
                num = Math.abs(arr[i] - arr[i + 1])
            }
        } else if (Math.abs(arr[i] - arr[i+1]) > Math.abs(arr[i+1] - arr[i+2])) {
            if (Math.abs(arr[i + 1] - arr[i + 2]) <= num) {
                list.push([arr[i + 1], arr[i + 2]])
                num = Math.abs(arr[i + 1] - arr[i + 2])
            }
        } else if (Math.abs(arr[i] - arr[i + 1]) === Math.abs(arr[i + 1] - arr[i + 2])) {
            if (!list.length && Math.abs(arr[i] - arr[i + 1]) <= num) {
                list.push([arr[i], arr[i + 1]])
            }
            if (i + 1 <= arr.length - 2) {
                if (Math.abs(arr[i + 1] - arr[i + 2]) <= num) {
                    list.push([arr[i + 1], arr[i + 2]])
                    num = Math.abs(arr[i + 1] - arr[i + 2])
                }
            }
        }
    }
    console.log(list)
    return list
};

minimumAbsDifference([40,11,26,27,-20])




//测试
// function minimumAbsDifference(arr: number[]): number[][] {
//     let list: number[][] = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             list.push([arr[i], arr[j]])
//         }
//     }
//     let l1: number[][] = []
//     let num: number[]
//     for (let i = list.length - 2; i >=0; i--) {
//         for (let j = list.length - 1; j >=i+1; j--) {
//             if (Math.abs(list[i][0] - list[i][1]) > Math.abs(list[j][0] - list[j][1])) {
//                 num = list[i]
//                 list[i] = list[j]
//                 list[j] = num
//             }
//         }
//     }
//     for (let i = list.length -1; i >=0; i--) {
//         if (Math.abs(list[0][0] - list[0][1]) === Math.abs(list[i][0] - list[i][1])) {
//             l1.push(list[i])
//         }
        
//     }
//     l1 = l1.map(a => {
//         return a.sort((a, b) => a - b)
//     })
//     for (let i = l1.length - 2; i>=0; i--) {
//         for (let j = l1.length - 1; j>=i+1; j--) {
//             if ((l1[i][0] + l1[i][1]) >(l1[j][0] + l1[j][1])) {
//                 num = l1[i]
//                 l1[i] = l1[j]
//                 l1[j] = num
//             }
//         }
//     }
//     return l1
// };