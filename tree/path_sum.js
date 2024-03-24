/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var hasPathSum = function(root, targetSum) {
    if(!root){
       return false;
    }
    if(!root.left && !root.right && root.val === targetSum){
       return true;
    }
    return (hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val))
};
const tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.left.left = new TreeNode(11);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.right.right.right = new TreeNode(1);

const targetSum = 22;
console.log(hasPathSum(tree, targetSum));