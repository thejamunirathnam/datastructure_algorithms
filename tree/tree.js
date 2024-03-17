class Node{
    constructor(value){
       this.value =value;
       this.left=null;
       this.right=null;
    }
}

class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      let newNode = new Node(value);
      if(this.root==null){
        this.root = newNode;
        return this;
      }
      else{
        let currentNode = this.root;
        while(true){
            // left
           if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left=newNode;
                    return this;
                }
                currentNode = currentNode.left;
           }else{
                if(!currentNode.right){
                    currentNode.right=newNode;
                    return this;
                }
                currentNode = currentNode.right;
           }
        }
      } 
    }
    search(value){
       if(!this.root){
          return false;
       }
       else{
          let currentNode = this.root;
          while(true){
            if(currentNode.value == value){
               return currentNode;
            }else if(value < currentNode.value){
               if(!currentNode.left){
                 return false
               }
               currentNode = currentNode.left;
            }else {
                if(!currentNode.right){
                  return false
                }
                currentNode = currentNode.right;
             }
          }
       }
    }
}

let bst = new BinarySearchTree();
bst.insert(47);
bst.insert(13);
bst.insert(79);
bst.insert(7);
bst.insert(19);
bst.insert(70);
bst.insert(87);

// console.log(JSON.stringify(bst));
console.log("earch value",JSON.stringify(bst.search(20)));