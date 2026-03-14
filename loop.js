// loop in javascript
// for loop

for(let i = 0; i <=5; i++){
console.log(i)
};

// while loop

let j = 0;
while(j <= 5){
    console.log(j);
    j++;
};

// do while loop

let k = 0;
do{
    console.log(k);
    k++;
} while(k <= 5);

// for of loop

const colors = ['red', 'green', 'blue'];
for(const color of colors){
    console.log(color);
};

// for in loop

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for(const key in person){
    console.log(key, person[key]);

};

// for loop in array
const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i <numbers.length; i++){
    console.log(numbers[i]);

};

// for of loop in array

const fruits = ['apple', 'banana', 'cherry'];
for(const fruit of fruits){
    console.log(fruit);
};

// forEach method in array
const players = ['Alice', 'Bob', 'Charlie'];
players.forEach((player) => {
    console.log(player);
});

// break and continue in loop

for(let i = 0; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
};

// continue statement

for(let j = 0; j <= 10; j++){
    if(j === 5){
        continue;
    };
    console.log(j);
};


