/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var postorderTraversal = function(root) {
    debugger;
    const result = [];
    function traverse(node) {
        debugger;
        if (!node) return;
        traverse(node.left);   
        traverse(node.right);
        result.push(node.val);   
    }
    traverse(root);
    return result;
};
const tree = new TreeNode(1);
tree.left = new TreeNode(null);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);
console.log(postorderTraversal(tree));