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
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
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
// }


