function generete(n) {
    let target: string[] = []
    dfs(0, 0, '', target, n, 0)
    return target
}

const dfs = (startCount, endCount, str, target, n, num) => {
    console.log(num)
    if (str.length === n * 2) {
        target.push(str)
        return
    }

    if(startCount < n) dfs(startCount+1, endCount, str + '(', target, n, 1)
    if(endCount < startCount) dfs(startCount, endCount +1, str + ")", target, n, 2)
}

console.log(generete(2))