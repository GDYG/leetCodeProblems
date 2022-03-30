function Print(pRoot)
{
    let res = []
    function fn(node, res, leval) {
        if (node == null) return
        if (!Array.isArray(res[leval])) { 
            res[leval] = [] 
        }
        if (leval & 1) {
            res[leval].unshift(node.val)
        } else { 
            res[leval].push(node.val)
        }
        leval += 1
        fn(node.left, res, leval)
        fn(node.right, res, leval)
    }
    fn(pRoot, res, 0)
    console.log(res)
    return res
}