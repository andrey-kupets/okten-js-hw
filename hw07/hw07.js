// - Создать произвольный елемент с id = text.  Используя JavaScript,
//  сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const div = document.createElement('div');
// div.id = 'text';
// div.innerText = 'some text';
// div.style.display = 'block';

// const btn = document.createElement('button');
// btn.innerText = 'BUTTON';

// // div.appendChild(btn);
// document.body.appendChild(div);
// document.body.appendChild(btn);
// // btn.onclick = ev => {
// //     div.style.display = 'none';
// // }; //--------------or
// btn.onclick = ev => {
//     div.style.display === 'block'
//     ? div.style.display = 'none'
//     : div.style.display = 'block'
// }; 

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// btn.onclick = ev => {
//     btn.style.display = 'none';
// }; 



// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити
//  вік чи меньше він ніж 18, та повідомити про це користувача

// const input = document.createElement('input');
// const btn = document.createElement('button');
// btn.innerText = 'OK';

// // input.appendChild(btn); //  --- спросить, почему в инпуте не видно кнопки
// document.body.appendChild(input);
// input.type = 'number';
// document.body.appendChild(btn);

// btn.onclick = ev => {
//     if (input.value < 18) {
//         alert("you're not adult");
//     } else {
//         alert("oki-doki");
//     }
// };

// - Создайте меню, которое раскрывается/сворачивается при клике
// const a = document.createElement('a');
// a.innerText = 'list';
// a.href = '#';
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// li1.innerText = 'some words';
// li2.innerText = 'some words';
// li3.innerText = 'some words';
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// document.body.appendChild(a);
// document.body.appendChild(ul);

// let mark = false;

// a.onclick = ev => {
//     if(mark) {
//         ul.style.display = 'block';
//         mark = false;
//     } else {
//         ul.style.display = 'none';
//         mark = true;
//     }
// }

// - Создать список комментариев , пример объекта коментария - 
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// const head = document.createElement('div');
// document.body.appendChild(head);
// const commits = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];

// commits.forEach(item => {
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');  
//     const btn = document.createElement('button');  
//     btn.innerText = 'HIDE';
//     h2.innerText = item.title;
//     p.innerText = item.body;
//     btn.onclick = () => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//     }
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(btn);

//     head.appendChild(div);
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку 
// при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм 
// (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. 
// Отже дайте формі та інпутам всі необхідні атрибути.

// const main = document.createElement('div');
// document.body.appendChild(main);
// const form1 = document.createElement('form');
// form1.id = 'form1';
// const input11 = document.createElement('input');
// input11.id = 'input11';
// input11.name = 'name11';
// const input12 = document.createElement('input');
// input12.id = 'input12';
// input12.name = 'name12';
// const form2 = document.createElement('form');
// form1.id = 'form2';
// const input21 = document.createElement('input');
// input21.id = 'input21';
// input21.name = 'name21';
// const input22 = document.createElement('input');
// input22.id = 'input22';
// input22.name = 'name22';

// form1.appendChild(input11);
// form1.appendChild(input12);
// form2.appendChild(input21);
// form2.appendChild(input22);

// main.appendChild(form1);
// main.appendChild(form2);

// const btn = document.createElement('button');
// btn.innerText = 'BUTTON';
// document.body.appendChild(btn);

// btn.onclick = ev => {
//     console.log(input11.value); // console.log(forms.form1.input11.value);
//     console.log(input12.value);
//     console.log(input21.value);
//     console.log(input22.value);
// }



// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

const main = document.createElement('div');
document.body.appendChild(main);

const createTable = (row, data, main) => {
    const table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < data; j++) {
            const td = document.createElement('td');
            td.innerHTML = input3.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    main.appendChild(table);
}

// createTable(2, 3, main);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const input1 = document.createElement('input');
input1.id = 'input1';
input1.name = 'name1';
input1.type = 'number';
const input2 = document.createElement('input');
input2.id = 'input2';
input2.name = 'name2';
input2.type = 'number';
const input3= document.createElement('input');
input3.id = 'input3';
input3.name = 'name3';
input3.type = 'text';
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(input3);

const btn = document.createElement('button');
btn.innerText = 'BUTTON';
document.body.appendChild(btn);

btn.onclick = ev => {
    createTable(input1.value, input2.value, main);
}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
