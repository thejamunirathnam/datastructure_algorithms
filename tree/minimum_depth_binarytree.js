
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;

    let min = Number.MAX_SAFE_INTEGER;
    if(root.left) min = Math.min(min, minDepth(root.left));
    if(root.right) min = Math.min(min, minDepth(root.right));

    return min + 1;

};
const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(minDepth(tree));