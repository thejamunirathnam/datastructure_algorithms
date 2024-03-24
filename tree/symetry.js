class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root) {
    if (!root) return true;

    function isMirror(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);
}

// Example usage
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);

console.log(isSymmetric(tree)); // Output: true
