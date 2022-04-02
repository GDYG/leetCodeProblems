function reConstructBinaryTree(pre, vin) {
    if(!pre.length || !vin.length) return null
        let root = new TreeNode(pre.shift())
        let i = vin.indexOf(root.val)
        root.left = reConstructBinaryTree(pre, vin.slice(0, i))
        root.right = reConstructBinaryTree(pre, vin.slice(i + 1))
        return root
}

reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6])