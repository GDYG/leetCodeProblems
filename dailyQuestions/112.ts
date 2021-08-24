let tmp: number = 0
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    tmp += root.val
    if (!root.left && !root.right) return tmp === targetSum
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};
