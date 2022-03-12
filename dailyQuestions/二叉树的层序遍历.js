function levelOrder(root) {
    if (!root) return []
    
    let ret = []
    const dfs = (node, arr, level) => {
        if (node == null) return
        if(!ret[level]) ret[level] = []
        ret[level].push(node.val)
        dfs(node.left, arr, level+1)
        dfs(node.right, arr, level+1)
    }
    dfs(root, ret, 0)
    return ret
}
console.log(levelOrder({ val: 1, left: {val: 2}}))