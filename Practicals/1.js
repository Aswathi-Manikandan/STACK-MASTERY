// Implement Stack using a JavaScript array 

// ===> in this  i have implemented stack using an array not used constructor . 

let stack = []

function push(value) {
    stack.push(value)
}

function pop() {
    if (empty()) {
        return "nothing to pop"
    } else {
        return stack.pop()
    }
}

function peek() {
    if (empty()) {
        return "no elements"
    } else {
        return stack[stack.length - 1]
    }
}

function empty() {
    return stack.length === 0
}

console.log(peek());
console.log(pop());
push(10)
push(20)
push(30)
push(40)
push(50)
console.log(stack); //[10,20,30,40,50]
console.log(pop());//50
console.log(stack);//[10,20,30,40]
console.log(peek()); //40
console.log(stack);//[10,20,30,40]







