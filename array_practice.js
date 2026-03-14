const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);
numbers.push('Hanif');
console.log(numbers);

const colors = ['red', 'green', 'blue'];
const removeLastColor = colors.pop();
console.log(colors);
console.log(removeLastColor);

const citys = ['New York', 'Los Angeles', 'Chicago'];
const removeFirstCity = citys.shift();
console.log(citys);
console.log(removeFirstCity);

const fruits = ['apple', 'banana', 'orange'];
fruits.unshift('grape');
console.log(fruits);

const animal = ['dog', 'cat']

animal.unshift('elephant');
console.log(animal);
