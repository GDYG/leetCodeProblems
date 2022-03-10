function threeOrders(root) {
    if (!root) return [[], [], []]

    let prevList = [], midList = [], nextList = [];

    const fn1 = (node) => {
        if (node == null) return
        prevList.push(node.val)
        fn1(node.left)
        fn1(node.right)
    }

    const fn2 = (node) => {
        if (node == null) return
        fn2(node.left)
        midList.push(node.val)
        fn2(node.right)
    }

    const fn3 = (node) => {
        if (node == null) return
        fn3(node.left)
        fn3(node.right)
        nextList.push(node.val)
    }

    fn1(root)
    fn2(root)
    fn3(root)

    const ret = [prevList, midList, nextList]
    return ret
}