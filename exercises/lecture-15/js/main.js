'use strict';

/*
Знайти елемент ul у документі та запам'ятати його у змінній ul.
*/

let ul = document.querySelector('ul');

/*
За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray. 
Якщо елемент відсутній, створити його зі значенням [].
*/

const itemsFromStorage = localStorage.getItem('items');

let itemsArray;
if (itemsFromStorage) {
  itemsArray = JSON.parse(itemsFromStorage);
} else {
  itemsArray = [];
}

console.log(itemsArray);

/*
Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню, 
що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до елемента ul.
*/

function addTask(text) {

    const li = document.createElement('li');
    
    li.textContent = text;

    ul.appendChild(li);
}

/*
Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.
*/

const tasks = ['Першимй li', 'Другий li', 'Третій li'];

tasks.forEach(task => {
    addTask(task);
});

/*
Знайти елемент input у документі та запам'ятати його у змінній input.
*/

let input = document.querySelector('input');

/*
Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, 
та зберігає цей масив у localStorage з ключем items, використовуючи метод JSON.stringify. 
Одночасно візуалізувати доданий елемент на сторінці, використовуючи функцію addTask.
*/

function add() {
    
    const inputText = input.value;

    if (inputText) { 
        itemsArray.push(inputText); 
        localStorage.setItem('items', JSON.stringify(itemsArray)); 
        addTask(inputText); 
        input.value = ''; 
    } else {
        alert('Будь ласка, введіть значення.');
     }
}

/*
Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.
*/

function del() {
    
    localStorage.clear();
    
    itemsArray = [];
  
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
  }
  


