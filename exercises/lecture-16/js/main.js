'use strict';

//Вправа 1

// sum() - це функція додавання. 
function sum(n1, n2) {
    return n1 + n2;
 }
 
// multiply() - це функція множення.
 
function multiply(n1, n2) {
     return n1 * n2;
}

function calculate(numbers, operation) {
    let res = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        res = operation(res,  numbers[i]);
    }
    return res;
   }

   console.log (calculate([4, 4], sum));
   console.log (calculate([4, 4], multiply));

   function calculate1(operation, initialValue, numbers) {
    let res = initialValue;
    for (const number of numbers) {
        res = operation(res,  number);
    }
    return res;
   }

   console.log (calculate1(sum, 0, [1, 2, 4]));
   console.log (calculate1(multiply, 1, [1, 2, 4]));

   //Вправа 2

   let student_names = ["Wick", "Malcolm", "Smith"]

   student_names.map((name, index, array) => {
    console.log(`name: ${name} | index: ${index} | array: [ "${array.join('", "')}" ]`);
  });

  //Вправа 3
 
let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];

const maxDegree = 600;

let results = students_information.map(student => {
    return {
        ...student,
        percentage: (student.degree / maxDegree * 100).toFixed(1)
    };
});

results.forEach(result => console.log(result));

 //Вправа 4

 const flatArray = (arr) => {
    let output = [];
    return arr.reduce((final, value) => {
    return final.concat(Array.isArray(value) ? flatArray(value) : value);
    }, output);
   }
   const input = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
   console.log(flatArray(input))