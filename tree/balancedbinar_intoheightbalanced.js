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
 * @return {boolean}
 */
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 
var isBalanced = function(root) {
    let flag = true;
    function getHeight(node, height){
        if(!node) return 0;

        let left_h = getHeight(node.left, height+1);
        let right_h = getHeight(node.right, height+1);

        if(Math.abs(left_h-right_h) > 1){
            flag = false
        }

        return Math.max(left_h, right_h) + 1;

    }

    getHeight(root,0);
    
    return flag;
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(isBalanced(tree)); 