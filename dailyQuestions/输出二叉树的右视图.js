function solve(xianxu, zhongxu) {
    let res = []
    let root = buildTree(xianxu, zhongxu)
    function dfs(root, res, leval) {  
        if (root == null) return
        if (!(res[leval])) res[leval] = []
        res[leval].push(root.val)
        dfs(root.left, res, leval+1)
        dfs(root.right, res, leval+1)
    }
    dfs(root, res, 0)
    return res.map(v => v[v.length - 1])
}
function buildTree(pre, mid) {  
    if (!pre.length || !mid.length) return null
    let root = new newTree(pre.shift())
    let o = mid.indexOf(root.val)
    root.left = buildTree(pre, mid.slice(0, o))
    root.right = buildTree(pre, mid.slice(o + 1))
    return root
}
function newTree(val) {  
    this.val = val;
    this.left = null;
    this.right = null;
}
console.log(solve([1,2,8,4,5,6,7,3],[8,2,1,5,7,6,4,3]))