class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function longestUnivaluePath(root: TreeNode | null): number {
    let ans: number = 0
    let midSort = (node: TreeNode | null) => {
        if (node == null) return 0
        let left = midSort(node.left);
        let right = midSort(node.right);
        let arrowLeft:number = 0, arrowRight:number = 0;
        if (node.left != null && node.left.val == node.val) {
            arrowLeft += left + 1;
        }
        if (node.right != null && node.right.val == node.val) {
            arrowRight += right + 1;
        }
        ans = Math.max(ans, arrowLeft + arrowRight);
        return Math.max(arrowLeft, arrowRight);
    }
    midSort(root)
    return ans
};

console.log(longestUnivaluePath({ val: 1, left: { val: 2, left: null, right: null}, right: null}))