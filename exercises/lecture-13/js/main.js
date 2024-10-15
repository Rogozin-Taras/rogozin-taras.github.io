'use strict';

const classes = ['first', 'second', 'third', 'fourth'];

/* Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. 
Встановити для нього стиль background-color = "gold"*/

const element = document.querySelector('#p1');
element.style.backgroundColor = "gold";

/*Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. 
Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;*/

const element2 = document.querySelector('#p2');
element2.style.backgroundColor = "gold";
element2.style.color = "blue";
element2.style.fontSize = "2rem";

/*Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. 
Призначити для нього клас third*/

const element3 = document.querySelector('#p3');
element3.classList.add('third');

/*Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. 
Призначити для нього класи fourth та border*/

const element4 = document.querySelector('#p4');
element3.classList.add('fourth', 'border');

/*Отримати першу кнопку за допомогою document.querySelector(). 
Призначити для неї стилі background-color:gold; color: blue;*/

const button = document.querySelector('#p1 button');
button.style.backgroundColor = "gold";
button.style.color = "blue";

/*Отримати другу кнопку за допомогою document.querySelector(). Виконати обробку події натискання на цю кнопку, 
що призводить до приховування параграфа p1.*/

const button2 = document.querySelector('#p2 button');

const hideP1 = () => {
    element.style.display = 'none';
}

function hideP() {
    button2.addEventListener('click', hideP1);
}

hideP();


/*Отримати третю кнопку за допомогою document.querySelector(). Виконати обробку події натискання на цю кнопку, 
що відображає прихований параграф p1.*/

const button3 = document.querySelector('#p3 button');

const displayP1 = () => {
    element.style.display = 'block';
}

function displayP() {
    button3.addEventListener('click', displayP1);
}

displayP();

/*Отримати четверту кнопку за допомогою document.querySelector(). Виконати обробку події натискання на цю кнопку, 
що переключає тему документа з світлої на темну і навпаки.*/

const button4 = document.querySelector('#p4 button');
const body = document.body;

const darkTheme = () => {
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'black';
    }
}

function darkThemeBody() {
    button4.addEventListener('click', darkTheme);
}

darkThemeBody();