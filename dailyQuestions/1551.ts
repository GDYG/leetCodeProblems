function minOperations(n: number): number {
    let mid: number, num: number = 0;
    let arr: number[] = []
    for (let i = 0; i < n; i++) {
        arr[i] = (2 * i) + 1
    }
    if (n % 2 == 0) {
        mid = (arr[n / 2] + arr[(n / 2) - 1]) / 2
        for (let k = 0; k <= ((n / 2) - 1); k++) {
            if (arr[k] < mid) {
                num += mid - arr[k]
            }
        }
    } else {
        mid = (arr[Math.floor(n / 2)])
        for (let k = 0; k <= Math.floor(n / 2); k++) {
            if (arr[k] < mid) {
                num += mid - arr[k]
            }
        }
    }
    return num
};