//      CLASS TASK 1 ---- см. файл templates 2

// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// const mainHeader = document.getElementById('main_header');
// mainHeader.innerText = 'catcha';

// -- робить шириниу елементу ul 400 пікселів

// const ul = document.getElementsByTagName('ul');
// for (const i of ul) {
//     i.style.width = '400px';
// }

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// const linkList = document.getElementsByClassName('linkList');
// for (const i of linkList) {
//     i.style.width = '50%';
// }

// -- отримує текст який зберігається в елементі з класом listElement2

// const listElement2 = document.getElementsByClassName('listElement2');
// for (const i of listElement2) {
//     console.log(i.innerText);
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий

// const li = document.getElementsByTagName('li');
// for (const i of li) {
//     i.style.backgroundColor = 'grey';
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// const a = document.getElementsByTagName('a');
// for (const i of a) {
//     i.classList.add('anchor');
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//  змінює йому розмір тексту на 40 пікселів

// for (const i of a) {
//     if (i.innerText === 'link3') {
//         i.style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (const i of a) {
//     let XXX = i.innerText;
//     console.log(XXX);
//     let className = `element_${XXX}`;
//     i.classList.add(className);
// }


// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// const subHeader = document.getElementsByClassName('sub-header');
// for (const i of subHeader) {
//     i.style.backgroundColor = prompt('enter yr color');
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у
//  видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// const subHeader = document.getElementsByClassName('sub-header');
// for (const i of subHeader) {
//     if (i.innerText === 'content 2 segment') {
//         i.style.backgroundColor = prompt('enter yr color');
//     }
// }
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// const content_1 = document.getElementsByClassName('content_1');
// for (const i of content_1) {
//         i.innerText = prompt('enter yr text');
// }

// -- отримати елементи p та змінити їм paddin на довільне значення

// let p = document.getElementsByTagName('p');
// for (const i of p) {
//     i.style.padding = '40px 20px'
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// const text2 = document.getElementsByClassName('text2');
// for (const i of text2) {
//     i.innerText = 'and justice for all';
// }
