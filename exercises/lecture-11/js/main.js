'use strict';

/* Вправа 1*/

let message1 = 'Hello';
let message2 = ' JavaScript';
alert(message1 + message2);

/* Вправа 2*/

let x = prompt('Enter value X', 0);
let y = prompt('Enter value y', 0);
console.log(parseInt(x)+parseInt(y));


/* Вправа 3*/

let value = prompt('Вгадайте яке число від 1 до 5 ми загадали', 'Напишіть тут ваш варіант');
switch (value) {
    case "0":
        console.log('The number is short');
        break;
    case "1":
        console.log('The number is short');
        break;
    case "2":
        console.log('The number is short');
        break;
    case "3":
        console.log('Congratulations, You did it!');
        break;
    case "4":
        console.log('The number is too long');
        break;
    case "5":
        console.log('The number is too long');
        break;
    default:
        console.log('Ви вказали значення, не в діапазоні від 0 до 5')
}

/* Вправа 4*/

let day = prompt('Ведіть назву дня неділі?', 'Напишіть тут ваш варіант');

let monday_uk = 'Понеділок'
let monday_en = 'Monday'
let friday_uk = "П'ятниця"
let friday_en = 'Friday'


if (day == monday_uk || day == monday_en) {
    console.log('Start of the work week!')
} else if (day == friday_uk || day == friday_en) {
    console.log('End of the work week!')
} else {
    console.log('A regular day')
}

switch (day) {
    case monday_uk:
        console.log('Start of the work week!');
        break;
    case monday_en:
        console.log('Start of the work week!');
        break;
    case friday_uk:
        console.log('End of the work week!');
        break;
    case friday_en:
        console.log('End of the work week!');
        break;
    default:
        console.log('A regular day')
}

/* Вправа 5*/

let score = prompt('Ведіть вашу кількість балів', 'Напишіть тут ваш варіант');

if (score < 50) {
    console.log('grade = F')
} else if (score < 70){
    console.log('grade = D')
} else if (score < 80){
    console.log('grade = C')
}else if (score < 90){
    console.log('grade = B')
} else{
    console.log('grade = A')
}