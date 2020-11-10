// - создать массив с 20 числами.

// const arr = [1, 2,  , 5, 55, 8, 9, 5, 7, 55, 41, 3, 11, 35, -5, 62, 3.2, -3.5, 0, 15, 61];
// console.log(arr);

// -- при помощи метода sort и колбека  отсортировать массив.

// const sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);  //----- прикол,,,,,даже эмпти сортует

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// const sortDownArr = arr.sort( (q, w) => w - q);
// console.log(sortDownArr);

// -- при помощи filter получить числа кратные 3

// const filterTo3 = arr.filter((value) => { // !!!!1 передаёт вывод кратности без нуля!
//     if (value % 3 === 0) {
//         return value
//     }
// })
// console.log(filterTo3); // or 

// const filterTo3 = arr.filter(value => value % 3 === 0 && value !== 0);
// console.log(filterTo3);

// -- при помощи filter получить числа кратные 10

// const filterTo10 = arr.filter(value => value % 10 === 0 && value !== 0); // когда чисел нет по условию -- пумтой массив
// console.log(filterTo10); // 

// -- перебрать (проитерировать) массив при помощи foreach()

// const iter = arr.forEach(value => console.log(value*100)); // не возвращает значения в массив, просто цикл перебора

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// const mapArr = arr.map(value => value * 3);
// console.log(mapArr);

// - создать массив со словами на 15-20 элементов.

// const words = ['alina', 'get out', 'cetcha', 'gustav', 'pier', ' diablo', 'madness', 'portlend', 'mine', 'football', 'feetback', 'Zhuzha', 'Bartolomeo'];
// console.log(words);
// -- отсортировать его по алфавиту в восходящем порядке.

// const sortWords = words.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//     return 0;
// });
// console.log(sortWords);

// -- отсортировать его по алфавиту  в нисходящем порядке.

// const sortWordsDown = words.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) return -1;
//     if (b.toLowerCase() > a.toLowerCase()) return 1;
//     return 0;
// });
// console.log(sortWordsDown);
// -- отфильтровать слова длиной менее 4х символов

// const filter = words.filter(value => value.length > 4);
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// const map = words.map(value => value = value + '!')
// console.log(map);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// console.log(users); // mutation => need JSON
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// const usersSort = users.sort((a, b) => a.age - b.age);
// console.log(usersSort);

// const usersSortDown = users.sort((a, b) => b.age - a.age);
// console.log(usersSortDown);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// const sortLetterNumbers = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sortLetterNumbers);

// const sortLetterNumbersDown = users.sort((b, a) => a.name.length - b.name.length);
// console.log(sortLetterNumbersDown);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
//  (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// const usersCopy = JSON.parse(JSON.stringify(users));

// const mapId = usersCopy.map((value, index) => {   //----- ONLY in {} with return, otherwise return array with index ONLY!!
//     value.id = index
//     return value
// }); 
// mapId.sort((a, b) => b.id - a.id ) // do id reverse
// console.log(users);
// console.log(mapId);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// const calc = (a, b, callback) => {
//     return callback (a,b);
// }

// const result = calc(15, 17, (a, b) => {
//     return a + b;
// });

// console.log(result);


// -- наисать функцию калькулятора с 3мя числами и колбеком

// const calc = (a, b, c, callback) => {
//     return callback (a, b, c);
// }

// const result = calc(15, 17, +prompt('enter yr number3'), (a, b, c) => {
//     return a - b**2 + c;
// });

// console.log(result);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [
//      {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//       {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//        {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//         {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//          {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//           {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//            {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//             {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//              {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
//              {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//              {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//               {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
//               {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
//             ];
// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів

// let volumeBig = cars.filter( car => car.volume > car.volume > 3);
// console.log(volumeBig);

// // - двигун = 2л

// let volumeMiddle = cars.filter( car => car.volume === 2 );
// console.log(volumeMiddle);

// // - виробник мерс

// let producer = cars.filter( car => car.producer === 'mercedes');
// console.log(producer);

// // - двигун більше 3х літрів + виробник мерседес

// let producerMotorBigM = cars.filter( car => (car.producer === 'mercedes' && car.volume > 3))
// console.log(producerMotorBigM);

// // - двигун більше 3х літрів + виробник субару

// let producerMotorBigS = cars.filter( car => (car.producer === 'subaru' && car.volume > 3))
// console.log(producerMotorBigS);

// // - сили більше ніж 300

// let power300 = cars.filter(car => car.power > 300);
// console.log(power300);

// // - сили більше ніж 300 + виробник субару

// let power300S = cars.filter(car => car.power > 300 && car.producer === 'subaru');
// console.log(power300S);

// // - мотор серіі ej

// let motorEj = cars.filter( car => car.engine.includes('ej'));
// console.log(motorEj);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej

// let power300SEj = cars.filter( car => car.power > 300 && car.producer === 'subaru' && car.engine.includes('ej'));
// console.log(power300SEj);

// // - двигун меньше 3х літрів + виробник мерседес
// let volumeLessM = cars.filter( car => car.volume < 3 && car.producer === 'mercedes');
// console.log(volumeLessM);

// // - двигун більше 2л + сили більше 250

// let volumeBigPower250 = cars.filter(car => car.volume > 2 && car.power > 250);
// console.log(volumeBigPower250);

// // - сили більше 250  + виробник бмв

// let power250B = cars.filter(car => car.power > 250 && car.producer === 'BMW');
// console.log(power250B);



// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
// ];
// // -- отсортировать его по id пользователей

// let sortId = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sortId);

// // -- отсортировать его по id пользователей в обратном опрядке

// let sortIdDown = usersWithAddress.sort((b, a) => a.id - b.id);
// console.log(sortIdDown);

// // -- отсортировать его по возрасту пользователей

// let sortAge = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sortAge);

// // -- отсортировать его по возрасту пользователей в обратном порядке

// let sortAgeDown = usersWithAddress.sort((b, a) => a.age - b.age);
// console.log(sortAgeDown);

// // -- отсортировать его по имени пользователей

// let sortName = usersWithAddress.sort((a, b) => a.name - b.name);
// console.log(sortName);

// // -- отсортировать его по имени пользователей в обратном порядке

// let sortNameDown = usersWithAddress.sort((b, a) => a.name - b.name);
// console.log(sortNameDown);

// // -- отсортировать его по названию улицы  в алфавитном порядке

// let sortStreet = usersWithAddress.sort((a, b) => a.address.street - b.address.street);
// console.log(sortStreet);

// // -- отсортировать его по номеру дома по возрастанию

// let sortNumberHouse = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sortNumberHouse);

// // -- отфильтровать (оставить) тех кто младше 30

// let sortAgeLess30 = usersWithAddress.filter(user => user.age < 30);
// console.log(sortAgeLess30);

// // -- отфильтровать (оставить) тех у кого отрицательный статус

// let sortStatusF= usersWithAddress.filter(user => user.status === false);
// console.log(sortStatusF);

// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let sortAgeLess30StatusF = usersWithAddress.filter(user => user.age < 30 && user.status === false);
// console.log(sortAgeLess30StatusF);
// // -- отфильтровать (оставить) тех у кого номер дома четный

// let sortNumberPair = usersWithAddress.filter(user => user.address.number % 2 === 0);
// console.log(sortNumberPair);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.

let car = {model: '', power: '', owner: {name: '', age: '', experiense: ''}, year: '', price: ''};
console.log(car);

// Створити не менше 7 та не більше 20 машинок.

class Car {
    constructor(model, power, owner, year, price) {
        this.model = model;
        this.power = power;
        this.owner = owner;
        this.year = year;
        this.price = price; 
    }
}

let carclone1 = new Car ('mercedes', 300, {name: 'Max', age: 25, experiense: 5}, 2010, 450000); 
let carclone2 = new Car ('BMW', 280, {name: 'Taras', age: 26, experiense: 4}, 2014, 435000); 
let carclone3 = new Car ('Fiat', 200, {name: 'Oleg', age: 50, experiense: 17}, 2019, 155000); 
let carclone4 = new Car ('Ferrari', 320, {name: 'Vova', age: 45, experiense: 12}, 2018, 650000); 
let carclone5 = new Car ('Renault', 220, {name: 'Petya', age: 22, experiense: 7}, 2015, 300000); 
let carclone6 = new Car ('Subaru', 240, {name: 'Andrii', age: 37, experiense: 3}, 2019, 280000); 
let carclone7 = new Car ('Peugeot', 270, {name: 'Kris', age: 44, experiense: 6}, 2013, 140000); 
let carclone8 = new Car ('Volkswagen', 260, {name: 'Sanya', age: 18, experiense: 1}, 2015, 320000); 

let cars = [carclone1, carclone2, carclone3, carclone4, carclone5, carclone6, carclone7, carclone8];
console.log(cars);

// Зробили половину автопарку ремонт мотору, що збільшить потужність
//  автомобілів на 10% (переприсвоєння змінної потужності).

// let halfPark = cars.filter((car, index) => !(index % 2));
// console.log(halfPark);

// halfPark.forEach(car => {
//     car.power = Math.round(car.power * 1.1);
    
// })
// console.log(halfPark); 

//--------------or better
// let increasePowerCars = JSON.parse(JSON.stringify(cars));

// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// let newOwners = [
//     {name: 'Masha', age: 26, experiense: 2},
//     {name: 'Dasha', age: 35, experiense: 7},
//     {name: 'Glasha', age: 29, experiense: 5},
//     {name: 'Sasha', age: 42, experiense: 4}
// ]

// increasePowerCars.forEach((car, index) => {
//     if (!(index % 2)) {
//     car.power = Math.round(car.power * 1.1);
//     car.owner = newOwners[index / 2];
//     } 
// })
// console.log(increasePowerCars);

// Для початку вкладіть всі наші створені автомобілі в масив cars.

// уже сделано

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
//  та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// for (let i = 0; i < cars.length; i += 2) {
//     cars[i].power = Math.round(cars[i].power * 1.1);
//     cars[i].price = Math.round(cars[i].price * 1.05);
// }
// console.log(cars);
// Після того зробити перевірку досвіду ВСІХ наших водіїв.
//  Якщо досвід водія менший за 5 років, але його вік більший за 25, 
//  то необідно відправити його на курси підвищення кваліфікації, 
//  що збільшить йому досвід на 1 рік.

// for (const car of cars) {
//     if (car.owner.experiense < 5 && car.owner.age > 25) {
//         console.log(`${car.owner.name} go to level up your skills`);
//         car.owner.experiense ++;
//     }
// }

// console.log(cars);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// let sum = cars.reduce((acc, value) => {
//     return acc + value.price
// }, 0);
// console.log(sum);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// function findIndex (arr, item) {
//     let min = arr.indexOf(item);
//     let max = arr.lastIndexOf(item);
//     item ? console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`) : console.log(-1);
// }

// findIndex(arr, 1);
// findIndex(arr, 4);
// findIndex(arr, 177);