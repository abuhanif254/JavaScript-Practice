// combining arrays
// concat mathod

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const combindArray = arr1.concat(arr2);
console.log(combindArray);

//  spread operator

const array1 = [7, 8, 9];
const array2 = [10, 11, 12];

const combindArrar1 = [...array1, ...array2];
console.log((combindArrar1));


// slice method

const array3 = [13, 14, 15, 16, 17];

const slicedArray = array3.slice(1,4);
console.log(slicedArray);

// splice method
const array4 = [18, 19, 20, 21, 22];

array4.splice(2, 1, 23);
console.log(array4);