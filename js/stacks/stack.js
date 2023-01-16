class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null
        this.bottom = null;
        this.length = 0;
    }

    peak(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.bottom = newNode;
            this.top = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length==0){
            return -1;
        }
        this.top = this.top.next
        this.length--;
        return this;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();