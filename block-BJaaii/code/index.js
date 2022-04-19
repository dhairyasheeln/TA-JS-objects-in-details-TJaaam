class Stack{
    constructor(){
        this.stack=[];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        this.stack.pop();
    }
    peek(index=this.stack.length-1){
        return this.stack[index];
    }
    reverse(){
        return this.stack.reverse();
    }
    isEmpty(){
        return (this.stack.length==0)
    }
    displayStack(){
        
        return this.stack.join(" ");
    }
    get length(){
        return this.stack.length;
    }
}

let myStack=new Stack([]);



/*
2. Create a class name `Queue` with the following data and methods. Also implement a `length` getter method.

Data:

- `queue`

Methods:

- `enqueue`(item): Adds the item at the end of the queue
- `dequeue`: Removes an item from the top of the queue
- `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the first element from top (index 0)
- `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
- `displayQueue`: returns all the data in stack in string format

Getter

- `length`: returns the current length of the stack.

*/



class Queue{
    constructor(queue){
        this.queue=queue;
    }
    enqueue(item){
        this.queue.push(item);
        return this.queue;
    }
    dequeue(){
        this.queue.splice(0,1);
        return this.queue;
    }
    isEmpty(){
        return (this.queue.length==0)
    }
    displayQueue(){
        return this.queue.join(" "); 
    }
    get length(){
        return this.queue.length;
    }

}




let atmQueue = new Queue([]);
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true






