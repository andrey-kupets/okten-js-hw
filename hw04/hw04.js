// - створити функцію яка виводить масив

// let arr = [];

// function fn(arr) {
// console.log(arr);
// }
// fn(arr);

// - створити функцію яка заповнює масив рандомними числами 
// та виводить його. Для виведення використати попвередню 
// функцію.

// function fn1(length, min, max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return array;
// }    
// const arr1 = fn1(5, 10, 100);
// fn(arr1);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function fnMin3(a, b, c) {
//     // let min;
//     // if(a < b && a < c) min = a;
//     // if(b < a && b < c) min = b;
//     // if(c < a && c < b) min = c;

//     let min = Math.min (a, b, c);
//     console.log(min);
//     return min;
// }

// const min3 = fnMin3(10, -17, 55);
// console.log(min3);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function fnMax3(a, b, c) {
//     // let max;
//     // if(a > b && a > c) max = a;
//     // if(b > a && b > c) max = b;
//     // if(c > a && c > b) max = c;
//     let max = Math.max(a, b, c);
//     return max
// }
// const max3 = fnMax3(445, 25, 5**5);
// console.log(max3);

// - створити функцію яка приймає будь-яку кількість чисел,
//  повертає найменьше, а виводить найбільше

// function fn() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const i of arguments) {
//         if (i < min) min = i;
//         if (i > max) max = i;
//     }
//     console.log(max);
//     return min;
// }
// let fnMin = fn(-15, 55, 88, -25, 63, (-5)**5);
// console.log(fnMin);

// - створити функцію яка виводить масив

// ----уже было

// - створити функцію яка повертає найбільше число з масиву

// let arr = [1, 2, 5, 25, -7, 8 ,4];

// function fn() {
//     let max = arr[0];
//     for (const i of arr) {
//         if (i > max) max = i;
//     }
//     return max;
// }
// let y = fn();
// console.log(y);
// - створити функцію яка повертає найменьше число з масиву

// let arr = [1, 2, 5, 25, -7, 8 ,4];

// function fn() {
//     let min = arr[0];
//     for (const i of arr) {
//         if (i < min) min = i;
//     }
//     return min;
// }
// let y = fn();
// console.log(y);

// - створити функцію яка приймає масив чисел та складає 
// значення елементів масиву та повертає його.

// let array = [1, 5, 8, 9, 55, 7, 8, -1];

// function fn(arr) {
//     let t = 0;
//     for (const i of arr) {
//         t = t + i;
//     }
//     return t;
// }
// let y = fn(array);
// console.log(y);
// - створити функцію яка приймає масив чисел та повертає 
// середнє арифметичне його значень.

// function fn(arr) {
//     let t = 0;
//     for (const i of arr) {
//         t = t + i;
//     }
//     return t/arr.length;
// }
// let y = fn([1, 5, 8, 9, 55, 7, 8, -1]);
// console.log(y);

// - Створити функцію яка приймає масив будь яких объектів,
//  та повертає значення кількості об'єктів в масиві

// let cars1 = [
// 	{model: 'ferrary', edition: 2015, power: '220hp', color: 'red',
// 	driver: {name: 'ivan', age: 27, gender: 'male', experience : 7}},
// 	{model: 'toyota', edition: 2011, power: '180hp', color: 'black',
// 	driver: {name: 'masha', age: 29, gender: 'female', experience : 12}},
// 	{model: 'crystler', edition: 2012, power: '210hp', color: 'blue',
// 	driver: {name: 'kolya', age: 41, gender: 'male', experience : 9}},
// 	{model: 'honda', edition: 2017, power: '160hp', color: 'white',
// 	driver: {name: 'petya', age: 35, gender: 'male', experience : 15}},
// 	{model: 'nissan', edition: 2019, power: '150hp', color: 'green',
// 	driver: {name: 'ruslan', age: 21, gender: 'male', experience : 3}},
// ]

// function fn(arr) {
//     let score = 0;
//     for (const i of arr) {
//         if ( typeof i === 'object') {
//             score++;
//         }
//     }
//     return score;
// }
// let y = fn(cars1);
// console.log(y);


// - Створити функцію яка приймає масив будь яких объектів, 
// та повертає загальн кількість полів в них

// function fn(arr) {
//     let score = 0;
//     for (const i of arr) {
//         if ( typeof i === 'object') {
//             for (const key in i) {
//                 score++;
//                 }
//             }
//         }
//     return score;
// }

// let y = fn(cars1);
// console.log(y);

// - створити функцію  яка скаладає значення елементів
//  з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// let arr1 = [1 ,2, 3, 4];
// let arr2 = [11, 22, 33, 44];

// function sum(arr1, arr2) {
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i] + arr2[i])
//     }
//     return arr3;
// }

// let t = sum(arr1, arr2);
// console.log(t);


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// {let a = 5;
// let b = 7;

// let aaaa = a;
// a = b;
// b = aaaa;
// console.log(a);
// console.log(b);
// }
// let arr = [1, 2 ,3, 4 ,55, 6 ];

// function fn(arr, index) {
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i+1]) {
//             if (index === i) {
//                 let qqq = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = qqq;
//             }
//         }
//     }
//     return arr;
// }
// const y = fn([1, 2 ,3, 4 ,55, 6 ], 3)
// console.log(y);

// - *** створити функцію яка буде переносити елементи з значенням 0
//  у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [0, 0, 0, 2, 3, 10, 20, 24, 100, 0, 14, 0, 6, 8, 0, 1, 0, 0, 0];

// function fn() {
//     for (let i = arr.length - 2 ; i >= 0; i--) {
//         if (arr[i] === 0) {
//             let slicedArr = arr.slice(i, i + 1);
//             // console.log(slicedArr);
//             arr.splice(i, 1);
//             arr.push(slicedArr[0]);
//         }
//     }
//     return arr
// }

// const y = fn();
// console.log(y);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// const hello = () => {
//     let div = document.createElement('div');
//     div.innerText = 'Hello owu';
//     document.body.appendChild(div);
// };

// hello(); 


// - Додає в боді елемент з текстом . Тип елементу та текст
//  отримати через аргументи

// const elem = (p) => {
//     document.body.appendChild(p);
// };

// let p = document.createElement('p');
//     p.innerText = 'SABRACADABRA';
// elem(p); 

// or
// const elem = (p, text) => {
//     p.innerText = text;
//     document.body.appendChild(p);
// };

// let p = document.createElement('p');
// elem(p, 'SABRACADABRA'); 

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список 
// цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати 
// його в елемент, індентифікатор якого ви отримали. 
// Всі властивості авто в обному блоці

// let cars = [
// 	{model: 'ferrari', edition: 2015, power: '220hp', color: 'red'},
// 	{model: 'toyota', edition: 2011, power: '180hp', color: 'black'},
// 	{model: 'chrysler', edition: 2012, power: '210hp', color: 'blue'},
// 	{model: 'honda', edition: 2017, power: '160hp', color: 'white'},
// 	{model: 'nissan', edition: 2019, power: '150hp', color: 'green'},
// 	{model: 'volvo', edition: 2016, power: '170hp', color: 'grey'},
// 	{model: 'hammer', edition: 2014, power: '250hp', color: 'hakki'},
// 	{model: 'renault', edition: 2015, power: '170hp', color: 'azure'},
// 	{model: 'mitsubishi', edition: 2013, power: '200hp', color: 'red'},
// 	{model: 'ford', edition: 2016, power: '180hp', color: 'blue'},
// ];

// let createCars = (array, idOfTag) => {
//     const carBlock = document.getElementById(idOfTag);
//     // const wrap = document.createElement('div');
//     for (let i = 0; i < array.length; i++) {
//         const car = array[i];
//         const div = document.createElement('div');
//         div.innerHTML = `${i+1} - ${car.model}: ${car.edition}`;
//         // wrap.appendChild(div);
//         carBlock.appendChild(div);
//     }
    
// };

// createCars(cars, 'carList');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let createCars = (array, idOfTag) => {
//     const carBlock = document.getElementById(idOfTag);
//     // const wrap = document.createElement('div');
//     for (let i = 0; i < array.length; i++) {
//         const car = array[i];
//         const div = document.createElement('div');
//         const number = document.createElement('div');
//         const name = document.createElement('h2');
//         const edition = document.createElement('p');
//         const hr = document.createElement('hr');

//         number.innerHTML = `${i+1}`;
//         name.innerHTML = `${car.model}`;
//         edition.innerHTML = `${car.edition}`;
//         carBlock.appendChild(number);
//         carBlock.appendChild(name);
//         carBlock.appendChild(edition);
//         carBlock.appendChild(hr);
//     }
    
// };

// createCars(cars, 'carList');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та
//  з'єднює в один об'єкт користувача та місто з відповідними "id" 
//  та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
    // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
    // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

// const joinArraysIn1 = (userArry, cityArray) => {
//     let users = JSON.parse(JSON.stringify(userArry));
//     let cities = JSON.parse(JSON.stringify(cityArray));

//     for (const user of users) {
//         for (const city of cities) {
//             if (user.id === city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     return users;
// }

// let joinedArray = joinArraysIn1(usersWithId, citiesWithId);
// console.log(joinedArray);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];

// const wrap = document.createElement('div');
// wrap.id = 'wrap';

// let rulesAction = (rulesArg) => {
//     for (let i = 0; i < rules.length; i++) {
//         const rule = rulesArg[i];
//         const divRule = document.createElement('div');
//         const h2 = document.createElement('h2');
//         const p = document.createElement('p');
//         divRule.className = `rules rule${i+1}`
//         h2.innerText = rule.title;
//         p.innerText = rule.body;
//         divRule.appendChild(h2);
//         divRule.appendChild(p);
    
//         wrap.appendChild(divRule);
//     }
    
//     document.body.appendChild(wrap);
// }

// rulesAction(rules);

// ===========додаткове від віктора========


// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========



// let sumator = (one, two) => one + two;
// console.log(sumator(20, 5));

// let age = 7;
// let message = age > 18 ? 'dood' : 'bad';
// console.log(message);