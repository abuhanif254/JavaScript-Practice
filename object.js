// Object
const car = {
    brand: 'toyota',
    model: 'corolla',
    year: 2020,
    start: function(){
        console.log('car is started')
    },
    stop: function(){
        console.log('car is stoped')
    }
};

console.log(car);
car.start();
car.stop();
console.log(car.brand);
console.log(car.model);
console.log(car.year);

