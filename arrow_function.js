// arrow function in javaScript

const add = (a, b) => a + b;

console.log(add(10,20));

const subtract = (a, b) => a - b;

console.log(subtract(100,50));

const multiply = (a, b) => a * b;

console.log(multiply(10,10));

const divide = (a, b) => a / b;

console.log(divide(100,10));

// function expression and anonymous function

const difference = (a,b) => a-b;

const result = difference(100,50);

console.log(result);


// annonymous function in a callback

const friends = ['Alice', 'Bob', 'Charlie'];

friends.forEach((friend) => console.log(`hello ${friend}`));
