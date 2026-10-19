// Implement Stack using a class

// What is a class? :

// A class is a blueprint for creating objects.
// Think of a class as a design that describes what a stack should contain and what operations it should perform.

// For our stack, we need:
// - Data to store elements.
// - A function to add elements.
// - A function to remove elements.
// - A function to view the top element.
// We put all these together inside the Stack class.

// Why use it?

// Instead of managing separate variables and functions, we organize the stack's data and 
// operations in one reusable structure.


// constructor() :

// constructor() {
//     this.items = [];
// }


// What is a constructor?
// A constructor is a special method that runs automatically whenever we create a new object using new Stack().
// For example:
// const stack = new Stack();


// When this statement runs, JavaScript calls the constructor.
// Let's understand the two important parts.
// this.items = []
// - this refers to the current object being created.
// - items is the property that stores our stack elements.
// - [ ] creates an empty array.

// Why do we use it?
// Every stack needs its own storage. The constructor initializes that storage when a stack is created.
// For example:
// const stack1 = new Stack();
// const stack2 = new Stack();


// Now stack1 and stack2 each have their own empty items array.
// If we add 10 to stack1, it won't be added to stack2.

// push(value) — Add an element :

// push(value) {
//     this.items.push(value);
// }


// What does it do?

// Adds an element to the top of the stack.
// Suppose we call:
// stack.push(10);


// Here's what happens:

// 1. value receives 10.
// 2. this.items accesses the current stack's array.
// 3. this.items.push(value) adds 10 to the array.


class Stack {
    constructor() {
        this.items = []
    }

    Isempty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
    display() {
        console.log(this.items);
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.Isempty()) {
            return "nothing to pop"
        } else {
            return this.items.pop()
        }
    }

    peek() {
        if (this.Isempty()) {
            return "no elements"
        } else {
            return this.items[this.items.length - 1]
        }
    }
}

const stack = new Stack()
console.log(stack.pop());
console.log(stack.peek());

stack.push(10)
stack.push(20)
stack.push(30)
stack.display()
console.log(stack.pop());
stack.display()
console.log(stack.peek());
stack.display()

