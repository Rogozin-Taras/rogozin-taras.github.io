'use strict';

/* Вправа 1 Напишіть функцію checkAge(age), що приймає параметр age та повертає true, якщо параметр age перевищує 18, 
в іншому випадку запитує підтвердження 'Did parents allow you?' та повертає результат. Реалізуйте функцію checkAge(age) 
двома способами - використовуючи оператор if () { } else { } та - використовуючи тернарний оператор ?. */

function checkAge(age){
    if (age >= 18) {
        return true;
    } else {
        return confirm("Did parents allow you?")
    }
}

let age = 18;

let res = age >=18? "true" : confirm("Did parents allow you?")


/* Вправа 2 Напишіть функцію min(a,b), яка повертає найменше з двох чисел a і b. У випадку рівності a == b немає значення, що повертати.*/

function min(a,b){
    if (a < b) {
        return a
    } else if (a > b){
        return b
    } else {
        return a+b;
    }
}

let a = 10;
let b = 10;

let res_ab = a < b? a : (a > b? b : a+b )

/* --- Вправа 3  Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, множить x на себе n разів і повертає результат. 
У цьому завданні функція повинна підтримувати лише натуральні значення n: цілі числа від 1.--- */

function pow() {
    let x = prompt('Ведіть число яке потрібно множити');
    let n = prompt('Ведіть кількість разів множення');

    if(Number.isInteger(n) && n > 0){
       alert("Неправильне значення параметра n")
    }
    else if (n === 1) {
      return x;
    } else {
      return x * n;
      pow(x, n - 1);
    }
  }

/* --- Вправа 4 Переписати функцію ask, використовуючи функцію стрілок:--- */

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
  };

/* --- Вправа 5  Переписати функцію ask, використовуючи функціональний вираз --- */

  let ask1 = function(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  };

/* --- Вправа 6  Маємо 3 функції.--- */

function A() 
{ console.log('A was called'); 
    return undefined; 
}
function B() 
{ console.log('B was called'); 
    return false; 
}
function C() 
{ console.log('C was called'); 
    return "foo"; 
}

// Яким чином виконати виклик функцій A() і C(), щоб на консолі отримати такий результат '''A was called C was called foo '''

console.log(C(A()))

// Яким чином виконати виклик функцій B() і C(), щоб на консолі отримати такий результат '''B was called C was called foo '''

console.log(C(B()))

/* --- Вправа 7  Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. 
Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль. Змінити тип властивості name з рядка на об'єкт, 
з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль. */

const person = {
    name:'Ivan',
    age:23
};

person.name={
    firstName:"Sergey",
    lastName:"Ponomarenko"
}

console.log(person);

/*  Вправа 8 */

const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

// Використовуючи цикл for вивести на консоль список елементів з масиву fruits.

for (var i = 0; i < fruits.length; i++){
console.log(fruits[i])
}

// Використовуючи цикл while вивести на консоль список елементів з масиву fruits.

var i = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}

// Використовуючи цикл do...while вивести на консоль список елементів з масиву fruits.

var i = 0;
do {
    console.log(fruits[i]);
    i++;
    } while (i < 5);


/*  Вправа 9 Маємо масив Numbs.*/

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Використовуючи цикл for вивести на консоль парні елементи з масиву Numbs.

for (var i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i])
    }
}

/*  Вправа 10 Маємо масив names:*/

const names = ['Batman'];

// Додати 'Joker' в кінець масиву names:

names.push('names');

// Додати 'Bane' на початок масиву names

names.unshift('Bane');

// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.

if (!names.includes('Alfred')){
    names.push('Alfred');
}

// Перевірити чи існує рядок 'Batman' у масиві names, і якщо існує, видалити його з масиву.

if (names.includes('Batman')){
 const index = names.indexOf('Batman');
 delete names[index];
}



