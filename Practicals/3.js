//Implement Stack from scratch using an array and top pointer

// Our goal is to manage this array ourselves using a variable called top.
// 2. What is a top pointer?
// First, look at this array:
// let stack = [10, 20, 30];


// Every element has an index.
// Element	Index
// 10	    0
// 20	    1
// 30	    2
// The top element is 30, and its index is 2.
// Instead of searching for the top element every time, we can store its index in a variable:
// let top = 2;


// Now, top tells us where the current top element is located.
// Important: Here, top is just a normal number variable that stores an array index. It is not a special JavaScript pointer.
// But what happens when the stack is empty?
// let stack = [];
// let top = -1;


// We use -1 to mean there is no top element. This is because valid array indexes start at 0.
// Remember these two rules:
// - top === -1 means the stack is empty.
// - top >= 0 means the stack has at least one element.


let stack = []
let top = -1 //initially setting it as empty

function push(value) {
    top++ // top was -1. Increasing it by one makes it 0. Why? Because the first element belongs at index 0.
    stack[top] = value //stack[0] = 10;
    return value
}

// Why do we use top++ before storing the value?
// Because top must move to the next available index before we put the new element there.
// Unlike our earlier implementation, we don't call stack.push(value). We manually increase
//  the index and assign the value.

function pop() {
    if (top === -1) {
        return "nothing to pop"
    } else {
        let removed = stack[top]
        stack.length = top //used to remove the top element from the stack by reducing the array's length.
        top--;
        return removed
    }
}

function isEmpty() {
    return top === -1;
}

function size() {
    return top + 1;
}

function peek() {
    if (top === -1) {
        return "Stack is empty";
    }

    return stack[top];
}

function display() {
    let result = [];

    for (let i = 0; i <= top; i++) {
        result[i] = stack[i];
    }

    return result;
}

console.log(display()); // [10, 20]
// let result = [] creates an empty array to display.
// let i = 0 starts at the first index.
// i <= top continues until the current top index.
// result[i] = stack[i] copies each active element into result.
// console.log(result) prints the elements.

console.log(push(10)); // 10
console.log(push(20)); // 20
console.log(push(30)); // 30

console.log(pop());    // 30
console.log(peek());   // 20

console.log(stack);    // [10, 20]
console.log(top);      // 1
console.log(display()); // [10, 20]