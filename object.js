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

const student = {
    name: 'Abu Hanif',
    age: 27,
    subjects: ['Math', 'Physics', 'Chemistry', 'ICT', 'English', 'Bangla'],
    greet: function(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old. i am studying ${this.subjects.join(', ')}`)
    }
};
console.log(student);
student.greet();
