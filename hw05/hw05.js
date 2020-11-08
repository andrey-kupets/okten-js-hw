// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
        // {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
//         attrs: [
// function TagDescr(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'No title';
//     this.action = action || 'No action';
//     this.attrs = attrs || [];
// }

// let titleA = '<a>';
// let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let attributesA = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];

// let a = new TagDescr(titleA, actionA, attributesA);
// console.log(a);

// // ----
// let titleDiv = '<div>';
// let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let attributesDiv = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ];
// let div = new TagDescr(titleDiv, actionDiv, attributesDiv);
// console.log(div);


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// class TagDescrCl {
//     constructor (titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag || 'No title';
//         this.action = action || 'No title';
//         this.attrs = attrs || 'No title';
//     }
// }

// let titleAClass = '<a>';
// let actionAClass = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let attributesAClass = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];

// let aCl = new TagDescrCl(titleAClass, actionAClass, attributesAClass);
// console.log(aCl);

// // -----------

// let titleDivClass = '<div>';
// let actionDivClass = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let attributesDivClass = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ];
// let divCl = new TagDescrCl(titleDiv, actionDiv, attributesDiv);
// console.log(divCl);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, 
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю 
// {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує 
// значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з 
// довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
    //     model: 'Cayen',
    //     producer: 'Porshe',
    //     year: 1980,
    //     maxSpeed: 180,
    //     volume: 6.5,
    // //     driver: '',
    //     drive: function () {
    //         console.log(`"їдемо зі швидкістю ${this.maxSpeed} на годину"`); 
    //     },
    //     info: function () {
    //         console.log(`
    //         model: ${this.model}
    //         producer: ${this.producer}
    //         year: ${this.year}
    //         maxSpeed: ${this.maxSpeed}
    //         volume: ${this.volume}
    //         driver: ${this.driver}
    //         `);
    //     },
    //     increaseMaxSpeed: function (newSpeed) {
    //         this.maxSpeed += newSpeed;    
    //     },  
    //     changeYear: function (newValue) {
    //         this.year = newValue;
    //     },
    //     addDriver: function (driver) {
    //         this.driver = driver;
    //     }    
    // }
    
    // let driver = {name: 'Tarik', age: 25};
    
    // car.drive();
    // car.increaseMaxSpeed(50);
    // car.changeYear(1997);
    // car.addDriver(driver.name);
    // car.info();

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car (model, producer, year, maxSpeed, volume) {
//     this.model = model || "No";
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.driver = '';
    
//     this.drive = function() {
//         console.log(`"їдемо зі швидкістю ${this.maxSpeed} км на годину"`);
//     };
//     this.info = function() {
//         console.log(`
//         model: ${this.model}
//         producer: ${this.producer}
//         year: ${this.year}
//         speedMax: ${this.maxSpeed};
//         volume ${this.volume};
//         driver ${this.driver.name};
//         `);
//     };
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function(newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function(driver) {
//         this.driver = driver;
//     };    
// }

// let model = 'Touareg';
// let producer = 'Volkswagen';
// let year = 1985;
// let maxSpeed = 200;
// let volume = 8;
// let driver = 'Petya';

// let car = new Car(model, producer, year, maxSpeed, volume, driver);
// car.drive();
// car.changeYear(2000);
// car.increaseMaxSpeed(50);
// car.addDriver({name: 'Vanyek', age: 21});  // віводит обджект обджект, тогда делаю .нэйм
// car.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.Model = model || "No";
//         this.Producer = producer;
//         this.Year = year;
//         this.MaxSpeed = maxSpeed;
//         this.Volume = volume;
//         this.Driver = driver;
//     }
//     drive() {
//         console.log(`"їдемо зі швидкістю ${this.MaxSpeed} км на годину"`);
//     };
//     info() {
//         console.log(`
//         model: ${this.Model};
//         producer: ${this.Producer};
//         year: ${this.Year};
//         speedMax: ${this.MaxSpeed};
//         volume ${this.Volume};
//         driver ${this.Driver.Name};
//         `);
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.MaxSpeed += newSpeed;
//     };
//     changeYear (newValue) {
//         this.Year = newValue;
//     };
//     addDriver (driver) {
//         this.Driver = driver;
//     }
// }

// let model = 'Touareg';
// let producer = 'Volkswagen';
// let year = 1985;
// let maxSpeed = 200;
// let volume = 8;
// let driver = 'Petya';

// let car = new Car(model, producer, year, maxSpeed, volume, driver);
// console.log(car);
// car.drive();
// car.changeYear(2021);
// car.increaseMaxSpeed(40);
// car.addDriver({Name: 'Vanyek', Age: 21});  // віводит обджект обджект, тогда делаю .нэйм
// car.info(); // сделать последней, чтобы менялась инфо
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let clon1 = new Cinderella('Masha', 21, 36);
// let clon2 = new Cinderella('Lyubanya', 36, 39);
// let clon3 = new Cinderella('Ira', 32, 41);
// let clon4 = new Cinderella('Yulya', 19, 38);
// let clon5 = new Cinderella('Tanya', 22, 36);
// let clon6 = new Cinderella('Vera', 18, 41);
// let clon7 = new Cinderella('Dorothy', 19, 36);
// let clon8 = new Cinderella('Clava', 40, 40);
// let clon9 = new Cinderella('Sasha', 30, 37);
// let clon10 = new Cinderella('Anastasiya', 17, 35);

// let devishnik = [clon1, clon2, clon3, clon4, clon5, clon6, clon7, clon8, clon9, clon10];
// console.log(devishnik);

// class Prince {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }

// let prince = new Prince('MadMax', 35, 35);
// console.log(prince);

// for (let i = 0; i < devishnik.length; i++) {
//     if (devishnik[i].footSize === prince.slipper) {
//         console.log(devishnik[i].name);
//     }
    
// }
// // or
// for (const i of devishnik) {
//     if (i.footSize === prince.slipper) {
//         console.log(i.name);
//     }
// }

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella (name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }


// let clon1 = new Cinderella('Masha', 21, 36);
// let clon2 = new Cinderella('Lyubanya', 36, 39);
// let clon3 = new Cinderella('Ira', 32, 41);
// let clon4 = new Cinderella('Yulya', 19, 38);
// let clon5 = new Cinderella('Tanya', 22, 36);
// let clon6 = new Cinderella('Vera', 18, 41);
// let clon7 = new Cinderella('Dorothy', 19, 36);
// let clon8 = new Cinderella('Clava', 40, 40);
// let clon9 = new Cinderella('Sasha', 30, 37);
// let clon10 = new Cinderella('Anastasiya', 17, 35);

// let devishnik = [clon1, clon2, clon3, clon4, clon5, clon6, clon7, clon8, clon9, clon10];
// console.log(devishnik);

// class Prince {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }

// let prince = new Prince('MadMax', 35, 35);
// console.log(prince);

// for (let i = 0; i < devishnik.length; i++) {
//     if (devishnik[i].footSize === prince.slipper) {
//         console.log(devishnik[i].name);
//     }
    
// }
// // or
// for (const i of devishnik) {
//     if (i.footSize === prince.slipper) {
//         console.log(i.name);
//     }
// }

// -----------------****************---------------

    Створити обєкт автомобіля з полями:
Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
Власник автомобіля теж має бути обєкт, у якого є поля
Імя, вік, стаж водіння.
Створити не менше 7 та не більше 20 машинок.
Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
Для початку вкладіть всі наші створені автомобілі в масив cars.
Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі