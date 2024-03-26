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
var preorderTraversal = function(root) {
    const result = [];
    function traverse(node) {
        if (!node) return;
        result.push(node.val); 
        traverse(node.left);   
        traverse(node.right);  
    }
    traverse(root);
    return result;
};
const tree = new TreeNode(1);
tree.left = new TreeNode(null);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);
console.log(preorderTraversal(tree));