class Node{
    constructor(value){
      this.value = value,
      this.next = null
    }
}
class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        let newNode = new Node(value);
        this.tail.next = newNode; 
        this.tail = newNode;        
        this.length++;
    }
    prepend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){
        let newNode = new Node(value);
        if(index>=this.length){
          this.append(value);
        }
        let leader = this.traverse(index-1); 
        let holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }
    traverse(index){
    let count = 0;
    let currentNode = this.head;
    while(count!=index){
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
    }
    remove(index){
    let leader = this.traverse(index-1);
    let unwantednode = leader.next;
    leader.next = unwantednode.next;
    this.length--;
    }
}
const l = new LinkedList(22);
l.append(2);
l.append(77);
l.append(6);
l.append(43);
l.prepend(8);
l.insert(3,100);
console.log(JSON.stringify(l));
l.remove(2);
