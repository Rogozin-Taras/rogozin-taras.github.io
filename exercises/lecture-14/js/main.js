'use strict';


/*Вправа 1
Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. 
Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості 
textContent цього елемента на "A simple primary alert—check it out!".
*/

/*
На сторінці відсутній елемент з id = alert, тому я додавав CSS-клас alert-primary до классу з id = alert (я так розумію помилка в описі завдання)
 */


const btnPrimary = document.querySelector('.btn-primary');

const btnPrimaryOnClick = btnPrimary.addEventListener('click', function () {

    const alertElement = document.querySelector('.alert');

    alertElement.classList.add('.alert-primary');

    alertElement.textContent = 'A simple primary alert—check it out!';
}
);

/*Вправа 2
Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". 
Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості 
textContent цього елемента на "A simple secondary alert—check it out!"
*/

const btnSecondary = document.querySelector('.btn-secondary');

const btnSecondaryOnClick = btnSecondary.addEventListener('click', function () {

    const alertElement = document.querySelector('.alert');

    alertElement.classList.add('.alert-primary');

    alertElement.textContent = 'A simple secondary alert—check it out!';
}
);

/*Вправа 3 
Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". 
Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert та змінює значення властивості 
textContent цього елемента на "A simple success alert—check it out!"
*/

const btnSuccess = document.querySelector('.btn-success');

const btnSuccessMouseover = btnSuccess.addEventListener('mouseover', function () {
    
    const alertElement = document.querySelector('.alert');

    alertElement.classList.add('.alert-success');

    alertElement.textContent = 'A simple success alert—check it out!';
}
);

/*Вправа 3.1
Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert 
та змінює значення властивості textContent цього елемента на пустий рядок.
*/

const btnSuccessMouseover2 = btnSuccess.addEventListener('mouseover', function () {
    
    const alertElement = document.querySelector('.alert');

    alertElement.classList.remove('.alert-success');

    alertElement.textContent = '';
}
);

/*Вправа 4
Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". 
Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює значення властивості 
textContent цього елемента на "A simple danger alert—check it out!" Додати до кнопки прослуховувач події "focusout". 
Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості 
textContent цього елемента на пустий рядок.
*/

const btnDanger = document.querySelector('.btn-danger');

const btnDangerFocus = btnDanger.addEventListener('focus', function () {
    
    const alertElement = document.querySelector('.alert');

    alertElement.classList.add('.alert-danger');

    alertElement.textContent = 'A simple danger alert—check it out!';
}
);

const btnDangerFocusout = btnDanger.addEventListener('focusout', function () {
    
    const alertElement = document.querySelector('.alert');

    alertElement.classList.remove('.alert-danger');

    alertElement.textContent = '';
}
);

/*Вправа 5
Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас «dark-mode» 
елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно приховувати 
або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, 
якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light
*/

const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');

function toggleMode() {
    
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnDark.style.display = 'none';
        btnLight.style.display = 'block';
    } else {

        btnDark.style.display = 'block';
        btnLight.style.display = 'none';
    }
}

btnDark.addEventListener('click', toggleMode);
btnLight.addEventListener('click', toggleMode);

/*Вправа 6
Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". 
Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". 
Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). 
Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення властивості 
textContent цього елемента на "A simple info alert—check it out!";
*/

const btnInfo = document.querySelector('.btn-info');
const alertElement = document.querySelector('.alert');

if (btnInfo) {
    btnInfo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();

            alertElement.classList.add('.alert-info');
            
            alertElement.textContent = "A simple info alert—check it out!";
        }
    });
}

/*Вправа 7
Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title
*/

const cards = document.querySelectorAll('.card');

for(let i=0; i<cards.length; i++){
const cardTitle = cards[i].querySelector('.card-title');
console.log(cardTitle.textContent);
}

/*Вправа 8
Знайти на сторінці всі селектори .card. Використовуючи цмкл for, знайти для кожного елемента .card кнопку з класом 
.add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного 
елемента з класом .card-title
*/

const cards1 = document.querySelectorAll('.card');

for (let i = 0; i < cards1.length; i++) {
    const addToCartButton = cards1[i].querySelector('.add-to-cart');
    
    if (addToCartButton) {
      addToCartButton.addEventListener('click', function() {
        const cardTitle = cards1[i].querySelector('.card-title');
        console.log(cardTitle.textContent); 
      });
    }
  }