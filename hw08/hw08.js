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

// -----------------блок создания элементов---------------------

// //const form = document.createElement('form'); // в хтмл
// const form = document.getElementById('form');
// form.style.width = '180px';
// const textArea = document.createElement('textarea');
// textArea.id = 'textArea';
// const select = document.createElement('select');
// select.id = 'select';
// const option1 = document.createElement('option');
// option1.innerText = 'text1';
// const option2 = document.createElement('option');
// option2.innerText = 'text2';
// const option3 = document.createElement('option');
// option3.innerText = 'text3';

// const input1 = document.createElement('input');
// input1.type = 'text';
// input1.id = 'input1';
// input1.name = 'input1'
// const input2 = document.createElement('input');
// input2.type = 'number';
// input2.id = 'input2';
// input2.name = 'input2'
// const input3 = document.createElement('input');
// input3.type = 'checkbox';
// input3.name = 'input3';
// input3.id = 'input3';
// // // input3.value = 'false';
// const input4 = document.createElement('input');
// input4.type = 'checkbox';
// input4.name = 'input4';
// input4.id = 'input4';
// // //input4.value = 'false';
// const input5 = document.createElement('input');
// input5.type = 'radio';
// input5.name = 'radio';
// input5.id = 'input5';
// // //input5.value = 'false';
// const input6 = document.createElement('input');
// input6.type = 'radio';
// input6.name = 'radio';
// input6.id = 'input6';
// // //input6.value = 'false';

// const btn = document.createElement('button');
// btn.type = 'submit';
// btn.innerText = "got it";

// select.appendChild(option1);
// select.appendChild(option2);
// select.appendChild(option3);

// form.appendChild(select);
// form.appendChild(textArea);
// form.appendChild(input1);
// form.appendChild(input2);
// form.appendChild(input3);
// form.appendChild(input4);
// form.appendChild(input5);
// form.appendChild(input6);
// // --------- //form.appendChild(btn);
// document.body.appendChild(form);
// form.appendChild(btn);


// //-------------------блок функционала---------------------

// btn.onmouseover = () => {
//     if(!textArea.value || !input1.value || !input2.value || !select.value)
//     alert("don't forget to sign up all the form");
// }

// getDataForm(form);

// function saveForm(params) {
//     setDataForm(params);
// }

// function setDataForm (tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         // //console.log(tagElement);
//         if(tagElement.type === 'checkbox' || tagElement.type === 'radio')
//         {tagElement.checked ? tagElement.value = true : tagElement.value = false;}

//         localStorage.setItem(tagElement.id, tagElement.value);
//     }
// }

// function getDataForm(tag) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if(localStorage.hasOwnProperty(tag.children[i].id)) {
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if (tag.children[i].value === 'true') {
//                 tag.children[i].setAttribute('checked', 'checked');
//             }
//         }
        
//     }
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const text = document.querySelector("#text");
// const left = document.querySelector("#inputLeft");
// const right = document.querySelector("#inputRight");
// const save = document.querySelector("#inputSave");

// save.onclick = () => {
//     localStorage.setItem(localStorage.length+1, text.value);
// }

// console.log(localStorage);

// left.onclick = () => {
//     right.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if(localStorage.hasOwnProperty(key)) {
//             if(localStorage.getItem(key) === text.value)
//             index = key;
//         }
//     }
//     if (index === '1') {
//         left.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// }

// right.onclick = () => {
//     left.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if(localStorage.hasOwnProperty(key)) {
//             if(localStorage.getItem(key) === text.value)
//             index = key;
//         }
//     }
//     if (index === localStorage.length.toString()) {
//         right.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let a = '6';
let b = '1';
console.log(a-b);
console.log(a+b);