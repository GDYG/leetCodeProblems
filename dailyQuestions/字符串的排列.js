function Permutation(str) {
    let len = str.length
    let res = []
    let track = []
    function dfs(ss, n) { 
        if (n == len - 1) {
            res.push(ss)
            return
        }
        
        for (let i = n; i < len; i++) {
            // if(track.indexOf(ss.charAt(i)) != -1) continue
            // track.push(ss.charAt(i))
            ss = swag(ss, i, n)
            dfs(ss, n+1)
            ss = swag(ss, i, n)
            // track.pop()
        }
    }
    dfs(str, 0)
    return [...new Set(res)]
}

function swag(str, i, j) { 
    let arr = str.split('');
    [arr[j], arr[i]] = [arr[i], arr[j]];
    return arr.join('')
}

console.log(Permutation('aab'))