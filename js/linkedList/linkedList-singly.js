class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList{
    constructor(value){
        const node = new Node(value);
        this.head = node
        // this.head = {
        //     value:value,
        //     next:null
        // }
        this.tail = this.head;

        this.length = 1
    }    

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
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
        newNode.newNode = holdingPointer;

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
        if(index ==0){
            this.head = this.head.next
            this.length--;
            return this;
        }
        if(index>this.length){
            return -1;
        }
        const previusPointer = this.getTheIndex(index-1);
        const removePointer = previusPointer.next;

        
        previusPointer.next = removePointer.next
        if(previusPointer.next===null){
            this.tail = previusPointer;
        }
        this.length--;
        return this
    }
}

 let myLinkedList = new MySinglyLinkedList(1);
 myLinkedList.append(2);
 myLinkedList.append(3);
 myLinkedList.append(4);
 myLinkedList.remove(3);

