function reConstructBinaryTree(pre, vin) {
    let root = null
    function dfs(pre, vin, root) {
        if(!pre.length) return null
        let node = new TreeNode(pre[0])
        let i = vin.indexOf(pre[0])
        node.left = new TreeNode(dfs(pre.slice(1), vin.slice(0, i)))
        node.right = new TreeNode(dfs(pre.slice(1), vin.slice(i + 1)))
    }
    dfs(pre, vin, root)
    console.log(root)
    return root
}

reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6])