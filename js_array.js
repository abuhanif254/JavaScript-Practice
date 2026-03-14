const students = ["John", "Jane", "Doe"];

// Accessing elements
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
// Adding elements
students.push("Smith");
console.log(students);

// Removing elements
students.pop();
console.log(students);
students.shift();
console.log(students);
students.unshift("Alice");
console.log(students);

// Iterating over an array
students.forEach((student) => console.log(student));

// Mapping an array
const upperCaseStudents = students.map((student) => student.toUpperCase());
console.log(upperCaseStudents);

// Filtering an array
const filteredStudents = students.filter((student) => student.startsWith("J"));
console.log(filteredStudents);