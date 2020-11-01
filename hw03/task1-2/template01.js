// -Візьміть файл template1.html, підключіть до нього скрипт,
//  і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById
//  або document.getElementsByClassName
//   або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"

let textP = document.getElementById('content');
// console.log(textP.innerText);

// - отримує текст з блоку з id "rules"

let textD = document.getElementById('rules');
// console.log(textD.innerText);

// - замініть текст параграфа з id 'content' на будь-який інший


textP.innerText =  `There are no unlockable doors
                    There are no unwinable wars
                    There are no unrightable wrongs
                    Or unsignable songs`;

// - замініть текст параграфа з id 'rules' на будь-який інший

textD.innerText =  `There are no unbeatable odds
                    There are no believable gods
                    There are no unnameable names
                    Shall I say it again, yeah`;

// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій

let body = document.getElementsByTagName('body')

for (let x of body) {
    x.style.backgroundColor = 'red';
    x.style.color = 'blue';
}

// - отримати весь список класів елемента з id=rules і
//  вивести їх в console.log

let rules = document.getElementById('rules');
console.log(rules.classList);

// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');

for (let y of fcRules) {
    y.style.color = 'green'; //поменял на зеленый, чтобы не сливалось с предыдущими заданиями - где фон всех элементов красный
}






