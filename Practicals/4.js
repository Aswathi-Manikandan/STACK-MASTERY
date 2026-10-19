//implement stack usin object


let stack = {};
let top = -1;

// Add an element to the stack
function push(value) {
    top++;
    stack[top] = value;

    return value;
}

// Remove the top element
function pop() {
    if (top === -1) {
        return "Stack is empty";
    }

    let removedValue = stack[top];

    delete stack[top];
    top--;

    return removedValue;
}

// View the top element without removing it
function peek() {
    if (top === -1) {
        return "Stack is empty";
    }

    return stack[top];
}

// Check whether the stack is empty
function isEmpty() {
    return top === -1;
}

// Count the elements
function size() {
    return top + 1;
}

// Display the stack
function display() {
    let result = [];

    for (let i = 0; i <= top; i++) {
        result[i] = stack[i];
    }

    console.log(result);
}

// Test the stack
console.log(push(10));
console.log(push(20));
console.log(push(30));

display();

console.log("Top element:", peek());
console.log("Removed:", pop());

display();

console.log("Size:", size());
console.log("Is empty:", isEmpty());
