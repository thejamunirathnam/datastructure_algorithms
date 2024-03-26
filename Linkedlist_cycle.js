/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    while(fastPointer!=null && fastPointer.next!=null){
       slowPointer = slowPointer.next;
       fastPointer = fastPointer.next.next;
       if(fastPointer===slowPointer){
          return true;
       }
    }
    return false;
    
};
console.log(hasCycle([3,2,0,-4]));