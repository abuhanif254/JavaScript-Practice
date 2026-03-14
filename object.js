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

// access, modify and delete object properties

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    page: 180,
    publish: function(){
        console.log(`${this.title} is written by ${this.author} and has ${this.page} pages.`)
    }
}
// book.publish();
// console.log(book.title);
// book.title = 'The Great Gatsby - Revised Edition';
// console.log(book.title);
// delete book.page;
// console.log(book);

// update and modify object properties
book.page = 200;
console.log(book.page);

book['title'] = 'The Great Gatsby - Revised Edition';
console.log(book.title);

// add new property to object
book.genre = 'Novel';
console.log(book.genre);

// nested objects
const person = {
    name: 'Abu Hanif',
    age: 27,
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.address.city);

// use this keyword in object method
const employee = {
    name: 'Abu Hanif',
    age: 27,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`);
    }
};
employee.greet();

