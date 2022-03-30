function lowestCommonAncestor(root, o1, o2) {
    if (root == null) return root
    if (root.val == o1 || root.val == o2) return root.val

    let left = lowestCommonAncestor(root.left, o1, o2)
    let right = lowestCommonAncestor(root.right, o1, o2)
    if (left != null && right != null) { 
        return root.val
    }

    return left == null ? right : left
}