// Practical Example of Objects in JavaScript
// challange task: calculator object
/* 
create a calculator object with mathods: 
add(a,b) that returns the sum of two numbers
subtract(a,b) that returns the difference of two numbers
multiply(a,b) that returns the product of two numbers
divide(a,b) that returns the quotient of two numbers (handle division by zero)
*/

const calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        if(b === 0){
         return "can't devided by zero"
        }else{
            return a / b;
        }
    }
};

console.log(calculator.add(10,20));
console.log(calculator.subtract(100,50));
console.log(calculator.multiply(10,10));
console.log(calculator.divide(100,0));