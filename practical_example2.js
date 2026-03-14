// real world practical example 
// scenario: find the first even number in an array of numbers

const numbers = [1,2,3,4,5,6,7,8,9,10];

for(let number of numbers){
    if(number % 2 === 0){
    console.log(`the first even number is ${number}`);
    break;
    }
};

// scenario : skip processing invalid data in an array

const data = [ 10, 20, 'invalid', 30, 40];

for(let item of data){
    if(typeof item !== 'number') continue;
    console.log(item);
}