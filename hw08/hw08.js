// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через 
// некоторое время, введенный текст остался в textarea.

// let textArea = document.querySelector('#text');

// textArea.oninput = () => {
//     localStorage.setItem(777, textArea.value);
// }
// textArea.value = localStorage.getItem(777);

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

const form = document.createElement('form');
const textArea = document.createElement('textarea');

const select = document.createElement('select');
const option1 = document.createElement('option');
option1.innerText = 'text1';
const option2 = document.createElement('option');
option2.innerText = 'text2';
const option3 = document.createElement('option');
option3.innerText = 'text3';

const input1 = document.createElement('input');
input1.type = 'text';
const input2 = document.createElement('input');
input2.type = 'number';
const input3 = document.createElement('input');
input3.type = 'checkbox';
input3.name = 'check111';
input3.checked = 'checked1';
const input4 = document.createElement('input');
input4.type = 'checkbox';
input4.name = 'check111';
const input5 = document.createElement('input');
input5.type = 'radio';
input5.checked = 'checked2';
input5.name = 'radio111';
const input6 = document.createElement('input');
input6.type = 'radio';
input6.name = 'radio111';
const btn = document.createElement('button');
btn.type = 'submit';
btn.innerText = "got it";

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

form.appendChild(select);
form.appendChild(textArea);
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);
form.appendChild(input4);
form.appendChild(input5);
form.appendChild(input6);
form.appendChild(btn);
document.body.appendChild(form);

textArea.oninput = () => {
    localStorage.setItem('TEXT', textArea.value);
}
textArea.value = localStorage.getItem('TEXT');

input1.oninput = () => {
    localStorage.setItem('input1', input1.value);
}
input1.value = localStorage.getItem('input1');

input2.oninput = () => {
    localStorage.setItem('input2', input2.value);
}
input2.value = localStorage.getItem('input2');

            //не получается с инпутами типа чекбокс и радио!!!!!!!

input3.checked ? input3.value = true : input3.value = false;
localStorage.setItem('input3', input3.value);
input3.value = localStorage.getItem('input3', input3.value);

input4.checked ? input4.value = true : input4.value = false;
localStorage.setItem('input4', input4.value);
input4.value = localStorage.getItem('input4', input4.value);

input5.checked ? input5.value = true : input5.value = false;
localStorage.setItem('input5', input5.value);
input5.value = localStorage.getItem('input5', input5.value);

input6.checked ? input6.value = true : input6.value = false;
localStorage.setItem('input6', input6.value);
input6.value = localStorage.getItem('input6', input6.value);

select.oninput = () => {
    localStorage.setItem('select', select.value);
}
select.value = localStorage.getItem('select');

btn.onmouseover = () => {
    if(!textArea.value || !input1.value || !input2.value || !select.value)
    alert("don't forget to sign up all the form");
}


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

