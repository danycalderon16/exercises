class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class MyDoublyLinkedList{
    constructor(value){
        const node = new Node(value);
        this.head = node
        this.tail = this.head;

        this.length = 1
    }    

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;
    }

    insert(index,value){
        if(index<=0){
            return this.prepend(value);
        }
        if(index>=this.length){
            return this.append(value);
        }

        const newNode = new Node(value);

        const firstPointer = this.getTheIndex(index-1);
        const holdingPointer = firstPointer.next;

        firstPointer.next = newNode;
        newNode.prev = firstPointer;

        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;

        this.length++;

        return this;
    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        if(index==0){
            this.head = this.head.next
            this.head.prev = null;
            this.length--;
            return this;
        }
        if(index>this.length){
            return -1;
        }
        const previusPointer = this.getTheIndex(index-1);
        const removePointer = previusPointer.next;
        
        previusPointer.next = removePointer.next;
        if(removePointer.next===null){
            this.tail = previusPointer;
        }else{
            removePointer.next.prev = previusPointer;
        }
        removePointer.prev = null;

        this.length--;
        return this
    }
}

 let myLinkedList = new MyDoublyLinkedList(1);
 myLinkedList.append(2);
 myLinkedList.append(3);

