// -----------------------TASK1-------------------------------------------


// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {
// 	name: 'Fox',
// 	weight: 45,
// 	height: 0.6,
// 	speed: 50,
// 	friendly: true
// }

// console.log(dog);

// let person = {
// 	name: 'Max',
// 	weight: 80,
// 	height: 1.8,
// 	work: true,
// 	status: 'married'
// }

// console.log(person);

// let car = {
// 	name: 'Diablo',
// 	weight: 220,
// 	speed: 240,
// 	new: false,
// 	color: 'red'
// }

// console.log(car);

// let flat = {
// 	floor: 2,
// 	square: 50,
// 	room: 2,
// 	status: 'new',
// 	price: 10000
// }

// console.log(flat);

// let book = {
// 	name: 'Soviet Dust',
// 	pages: 324,
// 	storyLine: history,
// 	status: 'new',
// 	price: 310
// }

// console.log(book);

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let dogs = ['Chester', 'Rocky', 'MadMax', 'Riper', 'Chopper']

// console.log(dogs);

// let human = [
// 	{Name: 'Max', Height: 200, Weight: 90},
// 	{Name: 'Liza', Height: 160, Weight: 50},
// 	{Name: 'Tom', Height: 180, Weight: 75},
// 	{Name: 'Mary', Height: 175, Weight: 65},
// 	{Name: 'Jim', Height: 180, Weight: 80},
// ]

// console.log(human);

// let cars = [
// 	{Name: 'Ferrary', Speed: 260, Weight: 350},
// 	{Name: 'ZAZ', Speed: 120, Weight: 220},
// 	{Name: 'Crystler', Speed: 220, Weight: 550},
// 	{Name: 'Renault', Speed: 210, Weight: 400},
// 	{Name: 'Mazda', Speed: 240, Weight: 320},
// ]

// console.log(cars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, 
// одна з властивостей обов'язково повинна бути об'єктом,
// ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let house = {
// 	floor: 1,
// 	square: 50,
// 	rooms: {room1: 'bedroom', room2: 'living room'},
// 	features: ['secondary house', 'Khrushchev', 'high base'],
// 	price: 10000
// }

// console.log(house);

// let driver = {
// 	Name: 'Max',
// 	Age: 35,
// 	Features: ['ленивый', 'непунктуальный', 'осторожный'],
// 	FamilyMembers: {wife: true, children: true}{wife: true, children: true},
// 	Salary: 10000
// }

// console.log(driver);

// let toy = {
// 	Name: 'Transformer',
// 	Weight: 0.45,
// 	Materials: ['plastic', 'steal', 'rubber'],
// 	Features: {Control: 'radio/handly', USBsupply: false},
// 	price: 400
// }

// console.log(toy);

// let table = {
// 	Status: 'new',
// 	Weight: 7,
// 	Height: 70,
// 	Price: {wholesale: 800, retail: 1200},
// 	Materials: ['oak', 'leather', 'rubber'],
// }

// console.log(table);

// let book = {
// 	Name: 'Aquarium',
// 	StoryLine: ['history', 'detective'],
// 	Price: {wholesale: 200, retail: 300},
// 	Volume: 447,
// 	Status: 'new'
// }

// console.log(book);


// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і
//  відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. 
// Відповідь: console.log (users [0] .name). Будьте уважні! 
// 4й об'єкт має індес 3!

// console.log(users[7].status);
// console.log(users[4].status, users[10].status); //или отдельным логом
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age, users[9].age); //или отдельным логом
// console.log(users[4].age, users[4].name); 
// console.log(users[5].age, users[5].status); // or cycle:

// for (let i = 0; i < users.length; i++) {
// 	if ( i === 5) {
// 		console.log(users[i].age, users[i].status); 
// 	}
// }                         // or

// for (let i = 0; i < users.length; i++) {
// 	if ( users[i].name === 'anya') {
// 		console.log(users[i].age, users[i].status); 
// 	}
// }


// ---------------------TASK2-----------------------------------


// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
//  (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let car = {
// 	title: "exclusive",
// 	speed: 250,
// 	price: 250000
// }


// let man = {
// 	name: "petya",
// 	age: 25,
// 	statusFree: true 
// }


// let flat = {
// 	floor: 2,
// 	rooms: 4,
// 	price: 750000
// }

// let child = {
// 	name: 'sanya',
// 	sport: 'football',
// 	languages: 'ukrainian'
// }

// let cat = {
// 	name: 'Dracula',
// 	medicals: true,
// 	other: 'grey'
// }

// console.log(car, man, flat);

// - создать 5 объектов с полностью разным набором полей. 
// В каждом объекте должен присутсвовать массив и внутренний объект. 
// Опишите что угодно, машину, картину, болт... 
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let car1 = {
// 	title: "exclusive",
// 	speed: 250,
// 	price: {wholesale: 210000, retail: 250000},
// 	other: ['blue', 'low']
// }


// let man1 = {
// 	name: "petya",
// 	age: 25,
// 	skills: ['js', 'python'],
// 	wife: {name: 'liza', age: 24}
// }


// let flat1 = {
// 	floor: 2,
// 	rooms: 4,
// 	price: {wholesale: 700000, retail: 750000},
// 	properties: ['old style', 'warm', 'dry']	
// }

// let child = {
// 	name: 'sanya',
// 	sport: ['football', 'swimming'],
// 	languages: {english: 'a2', ukrainian: 'free'}
// }

// let cat = {
// 	name: 'Dracula',
// 	medicals: {analyses: true, vaccinations: true},
// 	other: ['loud', 'smart', 'grey']
// }

// console.log(car1, man1, flat1, child, cat);

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let key in car) {
// 	console.log(key);
// } 
// for (let key in man) {
// 	console.log(key);
// }
// for (let key in flat) {
// 	console.log(key);
// }
// for (let key in car1) {
// 	console.log(key);
// }
// for (let key in man1) {
// 	console.log(key);
// }
// for (let key in flat1) {
// 	console.log(key);
// }
// for (let key in child) {
// 	console.log(key);
// }
// for (let key in cat) {
// 	console.log(key);
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let keys01 = Object.keys(car);
// console.log(keys01);
// let keys02 = Object.keys(man);
// console.log(keys02);
// let keys03 = Object.keys(flat);
// console.log(keys03);
// let keys04 = Object.keys(car1);
// console.log(keys04);
// let keys05 = Object.keys(man1);
// console.log(keys05);
// let keys06 = Object.keys(flat1);
// console.log(keys06);
// let keys07 = Object.keys(child);
// console.log(keys07);
// let keys08 = Object.keys(cat);
// console.log(keys08);


// - Создать массив из 10 объектов cars и заполнить его машинами с полями 
// модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [
// 	{model: 'ferrary', edition: 2015, power: '220hp', color: 'red'},
// 	{model: 'toyota', edition: 2011, power: '180hp', color: 'black'},
// 	{model: 'crystler', edition: 2012, power: '210hp', color: 'blue'},
// 	{model: 'honda', edition: 2017, power: '160hp', color: 'white'},
// 	{model: 'nissan', edition: 2019, power: '150hp', color: 'green'},
// 	{model: 'volvo', edition: 2016, power: '170hp', color: 'grey'},
// 	{model: 'hammer', edition: 2014, power: '250hp', color: 'hakki'},
// 	{model: 'renault', edition: 2015, power: '170hp', color: 'azyre'},
// 	{model: 'mitsubishi', edition: 2013, power: '200hp', color: 'red'},
// 	{model: 'ford', edition: 2016, power: '180hp', color: 'blue'},
// ]

// console.log(cars);

// - Создать массив объектов cities и заполнить его объектами 
// с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
// 	{name: 'Kyiv', population: 3500000, country: 'Ukraine', region: 'Europe'},
// 	{name: 'Mexico City', population: 6000000, country: 'Mexico', region: 'Northern America'},
// 	{name: 'Kryvyi Rig', population: 600000, country: 'Ukraine', region: 'Europe'},
// 	{name: 'Beijing', population: 12000000, country: 'China', region: 'Asia'},
// 	{name: 'Tokyo', population: 1600000, country: 'Japan', region: 'Asia'},
// 	{name: 'London', population: 9000000, country: 'Great Britain', region: 'Europe'},
// 	{name: 'Paris', population: 8000000, country: 'France', region: 'Europe'},
// 	{name: 'Amsterdam', population: 3000000, country: 'Netherlands', region: 'Europe'},
// 	{name: 'Sydney', population: 2500000, country: 'Australia', region: 'Australia'},
// 	{name: 'Cairo', population: 4800000, country: 'Egypt', region: 'Africa'},
// ]

// console.log(cities);

// - Создать массив объектов cars и заполнить его машинами с полями
//  модель, год выпуска, мощность, цвет, водитель.
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

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

// console.log(cars1);
// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let item1 = 0;
// while (item1 < cars.length) {
// 	console.log(cars[item1]);
// 	item1++;
// }
// let item2 = 0;
// while (item2 < cities.length) {
// 	console.log(cities[item2]);
// 	item2++;
// }
// let item3 = 0;
// while (item3 < cars1.length) {
// 	console.log(cars1[item3]);
// 	item3++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let index1 = 0; index1 < cars.length; index1++) {
// 	console.log(cars[index1]);;
// }
// for (let index2 = 0; index2 < cities.length; index2++) {
// 	console.log(cities[index2]);;
// }
// for (let index3 = 0; index3 < cars1.length; index3++) {
// 	console.log(cars1[index3]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const iter1 of cars) {
// 	console.log(iter1);
// }
// for (const iter2 of cities) {
// 	console.log(iter2);
// }
// for (const iter3 of cars1) {
// 	console.log(iter3);
// }

// - взять объекты из задания 1 и превратить каждый в json.

// let car = {
// 	title: "exclusive",
// 	speed: 250,
// 	price: 250000
// }
// let man = {
// 	name: "petya",
// 	age: 25,
// 	statusFree: true 
// }
// let flat = {
// 	floor: 2,
// 	rooms: 4,
// 	price: 750000
// }
// let child = {
// 	name: 'sanya',
// 	sport: 'football',
// 	languages: 'ukrainian'
// }
// let cat = {
// 	name: 'Dracula',
// 	medicals: true,
// 	other: 'grey'
// }

// let toJSONCar = JSON.stringify(car);
// console.log(toJSONCar);
// let toJSONMan = JSON.stringify(man);
// let toJSONFlat = JSON.stringify(flat);
// let toJSONChild = JSON.stringify(child);
// let toJSONCat = JSON.stringify(cat);

// // - взять json из задания 11 и превратить их обратно в объекты.

// let cloneToJSONCar = JSON.parse(toJSONCar);
// console.log(cloneToJSONCar);
// let cloneToJSONMan = JSON.parse(toJSONMan);
// let cloneToJSONFlat = JSON.parse(toJSONFlat);
// let cloneToJSONChild = JSON.parse(toJSONChild);
// let cloneToJSONCat = JSON.parse(toJSONCat);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let cars = [
// 	{model: 'ferrary', edition: 2015, power: '220hp', color: 'red'},
// 	{model: 'toyota', edition: 2011, power: '180hp', color: 'black'},
// 	{model: 'crystler', edition: 2012, power: '210hp', color: 'blue'},
// 	{model: 'honda', edition: 2017, power: '160hp', color: 'white'},
// 	{model: 'nissan', edition: 2019, power: '150hp', color: 'green'},
// 	{model: 'volvo', edition: 2016, power: '170hp', color: 'grey'},
// 	{model: 'hammer', edition: 2014, power: '250hp', color: 'hakki'},
// 	{model: 'renault', edition: 2015, power: '170hp', color: 'azyre'},
// 	{model: 'mitsubishi', edition: 2013, power: '200hp', color: 'red'},
// 	{model: 'ford', edition: 2016, power: '180hp', color: 'blue'},
// ]

// for (const iter of cars) {
// 	cloneIter = JSON.stringify(iter);
// 	console.log(cloneIter);	
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cities = [
// 	{name: 'Kyiv', population: 3500000, country: 'Ukraine', region: 'Europe'},
// 	{name: 'Mexico City', population: 6000000, country: 'Mexico', region: 'Northern America'},
// 	{name: 'Kryvyi Rig', population: 600000, country: 'Ukraine', region: 'Europe'},
// 	{name: 'Beijing', population: 12000000, country: 'China', region: 'Asia'},
// 	{name: 'Tokyo', population: 1600000, country: 'Japan', region: 'Asia'},
// 	{name: 'London', population: 9000000, country: 'Great Britain', region: 'Europe'},
// 	{name: 'Paris', population: 8000000, country: 'France', region: 'Europe'},
// 	{name: 'Amsterdam', population: 3000000, country: 'Netherlands', region: 'Europe'},
// 	{name: 'Sydney', population: 2500000, country: 'Australia', region: 'Australia'},
// 	{name: 'Cairo', population: 4800000, country: 'Egypt', region: 'Africa'},
// ]

// for (const iter2 of cities) {
// 	let cloneIter2 = JSON.stringify(iter2);
// 	console.log(cloneIter2);
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json 
// и сразу скоприовать в новый массив.

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

// for (const iter3 of cars1) {
// 	let cloneCars1 = JSON.stringify(cars1);
// 	console.log(cloneCars1);
// }

// - Создать массив пользователей. У каждого пользователя обязательно
//  должено быть поле skills которое является массивом.
//  Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
// 	{name: 'vasya', age: 25, skills: ['html', 'css']},
// 	{name: 'petya', age: 35, skills: ['html', 'css', 'js']},
// 	{name: 'marina', age: 40, skills: ['html', 'css', 'js', 'react', 'node.js']}
// ]

// for (const item of users) {
// 	console.log(item);
// 	for (const elem of item.skills) {
// 		console.log(elem);
// 	}	
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills
//  которое является массивом. Проитерировать массив пользователей и в каждом пользователе
//  проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let newUsers = [];

// for (const item of users) {
// 	// console.log(item);
// 	for (const elem of item.skills) {
// 		console.log(elem);
		
// 		newUsers.push(elem);
// 		console.log(newUsers);
// 	}	
// }                     // получилось 10 массивов, последний - то, что надо

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
// {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];

// for (const iter of users) {
// 	for (const elem of iter.skills) {
// 		console.log(elem);	
// 	}
// 	console.log('--------------');	
// }


// -----------------------------------


//  в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , 
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
						// }];
	
// - З масиву users за допомогою циклу витягнути адреси користувачів
//  і записати (скопіювати) їх в інший порожній масив.						

// let addresses = [];
// for (const iter of users) {
// 	addresses.push(iter.address);
// }
// console.log(addresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера 
// в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	let address = '';
// 	for (const address1 in user.address) {
// 		address = address + ' ' + user.address[address1];
// 	}
// 	div.innerText = `${user.name} ${user.age} ${user.status} ${address}`;
// 	document.body.appendChild(div);
// }                                       //почему-то не работает через фор оф

// - За допомоги циклу проітерувати  масив users, записати кожного юзера 
// в сівй блок за допомоги document.createElement, розділивши всі властивості 
// по своїм блокам (div>div*4)

// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	const h4 = document.createElement('h4');
// 	const p1 = document.createElement('p');
// 	const p2 = document.createElement('p');
// 	const p3 = document.createElement('p');
// 	let address = '';
// 	for (const address1 in user.address) {
// 		address = address + ' ' + user.address[address1];
// 	}
// 	h4.innerText = user.name;
// 	p1.innerText = user.age;
// 	p2.innerText = user.status;
// 	p3.innerText = address;
// 	div.appendChild(h4);
// 	div.appendChild(p1);
// 	div.appendChild(p2);
// 	div.appendChild(p3);
// 	document.body.appendChild(div);
// } 

// - За допомоги циклу проітерувати  масив users, записати кожного юзера
//  в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , 
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
// 	const user = users[i];
// 	const div = document.createElement('div');
// 	const name = document.createElement('h4');
// 	const age = document.createElement('p');
// 	const status = document.createElement('p');
// 	const address = document.createElement('div');

// 	for (const i in user.address) {
// 		const addressBlock = document.createElement('div');
// 		addressBlock.innerText = user.address[i];
// 		address.appendChild(addressBlock);
// 	}
// 	name.innerText = user.name;
// 	age.innerText = user.age;
// 	status.innerText = user.status;

// 	div.appendChild(name);
// 	div.appendChild(age);
// 	div.appendChild(status);
// 	div.appendChild(address);
// 	document.body.appendChild(div);
// } 

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// for (const user of usersWithId) {
// 	for (const city of citiesWithId) {
// 		if (user.id === city.user_id) {
// 			user.address = city;
// 		}
// 	}
// }
// let allTogether = usersWithId;
// console.log(allTogether);



// - створити розмітці блок з id, class та текстом в середені. 
// Зчитати окремо цей текст з селекторів по id , class та тегу



// let a = document.getElementById('01');
// const text = a.innerText;
// console.log(a);
// console.log(text);

// let b = document.getElementsByClassName('style01');
// for (const i of b) {
// 	console.log(i);
// }
// let c = document.getElementsByTagName('div');
// for (const item of c) {
// 	console.log(item);
// }

// - змінити цей текст використовуючи селектори id, class,  tag

// let getClass = document.getElementsByClassName('style01');
// for (let i of getClass) {
// 		i.innerText = 'aaaaaaaaaaaaa';
// }

// const ttt = 'Doused in mud';
// let getClass = document.getElementsByClassName('style01');
// for (let i of getClass) {
// 	if (getClass.innerText === ttt) {
// 		i.innerText = 'yyyy';
// 	}
// }                     //?????????????


// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let getClass = document.getElementsByClassName('style01');
// for (let i of getClass) {
// 		i.style.width = '400px';
// 		i.style.height = '400px';
// }
//-------------------------------------------------------------------------

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний
