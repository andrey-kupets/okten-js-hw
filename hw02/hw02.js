// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// let arr00 = [1, 2, 3, 4, 5];
// console.log(arr00);
// let arr01 = ['fvf', 'fvdfvdf', '!!!!!', 'ta nu ne', 'zest'];
// console.log(arr01);
// let arr02 = ['ht', '067-8888888', 1, true, false];
// console.log(arr02);


// -- Створити пустий масив. Наповнити його будь-якими значеннями
//  звертаючись до конкретного індексу. Вивести в консоль

// let arr03 = [];
// arr03[0] = 'lene';
// arr03[111] = 'fafa';
// arr03[2] = 555;
// arr03[3] = undefined;
// console.log(arr03);

// - За допомогою циклу for і document.write() вивести 10 блоків div
//  c довільним текстом всередині

// for (i = 0; i < 10; i++) {
//     document.write('<div>bgrbrbrg</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div 
// c довільним текстом і індексом всередині

// for ( let i = 0; i < 10; i++) {
//         document.write('<div>this</div>', i, '<div>div</div>') // индекс не в середине
//         console.log(i); // -------- а вот єто уже не смешно,,,,райт 10, а консоль -11????хз
//     }

// - За допомогою циклу while вивести в документ 20 блоків h1
//  c довільним текстом всередині.

// let i = 0;

// while (i < 20) {
//     document.write('<h1>vbnb<h1/>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 
// c довільним текстом і індексом всередині.

// let i = 0;

// while (i < 20) {
//     document.write('<h1>vbnb<h1/>', i, '<h1>ppp<h1/>');
//     i++;
// }

// - Створити масив з 10 числових елементів.
//  Вивести в консоль всі його елементи в циклі.

// let arr = [0, 1, 2, 3, 444, 555, 666, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів.
//  Вивести в консоль всі його елементи в циклі.

// let arrStr = ['qw', 'www', 'wwww', '!!', '1111', 'gbgb', 'gvgbvg', 'fvfv', 'vevfv', 'ggg  g'];

// for (let i = 0; i < arrStr.length; i++) {
//     console.log(arrStr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу.
//  Вивести в консоль всі його елементи в циклі.

// let arrAll = ['!!!!', 'www', '000', null, '067-8888888', 'gbgb', 'gvgbvg', {}, undefined, false];

// for (let i = 0; i < arrAll.length; i++) {
//     console.log(arrAll[i]);
// }
    
// - Створити масив з 10 елементів числового, стірчкового і 
// булевого типу. За допомогою if та typeof вивести тільки 
// булеві елементи

// let ww = ['fvf', 55, 'tgbtg', true, false, 'ggg', false, 555, -44, true];

// for (let i = 0; i < ww.length; i++) {
// if (typeof(ww[i]) === 'boolean') {
//     console.log(ww[i]);
// }
// }




// - Створити масив з 10 елементів числового, стірчкового і
//  булевого типу. За допомогою if та typeof вивести тільки 
//  числові елементи

// let qq = ['fvf', 55, 'tgbtg', true, false, 'ggg', false, 555, -44, true];

// for (let i = 0; i < qq.length; i++) {
// if (typeof(qq[i]) === 'number') {
//     console.log(qq[i]);
// }
// }

// - Створити масив з 10 елементів числового, стрічкового і 
// булевого типу. За допомогою if та typeof вивести 
// тільки рядкові елементи

// let ee = ['fvf', 55, 'tgbtg', true, false, 'ggg', false, 555, -44, true];

// for (let i = 0; i < ee.length; i++) {
// if (typeof(ee[i]) === 'string') {
//     console.log(ee[i]);
// }
// }

// - Створити порожній масив. Наповнити його 10 елементами
//  (різними за типами) через звернення до конкретних індексів.
//   Вивести в консоль всі його елементи в циклі.

// let rr = [];

// rr[0] = 111;
// rr[1] = '111';
// rr[2] = 'hn';
// rr[3] = true;
// rr[4] = -0.0002555;
// rr[5] = 'hyhy';
// rr[6] = {};
// rr[7] = '!!!';
// rr[8] = undefined;
// rr[9] = null;

// for (i = 0; i < rr.length; i++) {
//     console.log(rr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1.
//  Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1.
//  Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2.
//  Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. 
// Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ( i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій. 
// Вивести тільки парні кроки. через console.log + document.write

// уже было --- повтор

// - Створити цикл for на 100 ітерацій. 
// Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ( i % 2 === 1) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини 
// (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i < 3; i++) {
//     let j = 0;
//     if (i < 2 ) {
//         for (; j < 60; j++){
//             console.log(i, j); 
//             }
//     } 
//     else if( i = 2 ) {
//         console.log(i, j);
//     }   
// }

// let m = 0;
// let s = 1;

// while( m <= 2) {
//     while (s < 60) {
//         console.log(`minutes: ${m} seconds: ${s}`);
//         s++;
//     }
//     s = 0;
//     m++;
//     if (m === 2) {
//         console.log(`minutes: ${m} seconds: ${s}`);
//         break;
//     }
// }

// **************************************************************

// for (let h = 0; h <= 2; h++) {
//     m = 0; 
//     for (; m < 60; m++) {
//         s = 0;
//         for (;s < 60; s++) {
//             document.write(`hours: ${h} minutes: ${m} seconds: ${s}`);
//         }
        
//     }
//     if (h === 2 && m === 20) {
//         document.write(`hours: ${h} minutes: ${m} seconds: ${s}`);
//         break;
//     }
// }

// вышло без 1 секунды

// - Відтворити роботу годинника, відрахувавши  
// 2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// let hours = 0;
// let minutes = 0;
// let seconds = 1;

// while (seconds <= 60){
//     if (seconds === 60) {
//         minutes++;
//         seconds = 0;
//     } else if (minutes === 60) {
//         hours++;
//         minutes = 0;
//     } else if (hours === 2 && minutes === 20) {
//         break;
//     } else if (hours === 0) {
//         console.log(`minutes: ${minutes}, seconds: ${seconds};`);
//         seconds++
//     } else {
//         console.log(`hours: ${hours}, minutes: ${minutes}, seconds: ${seconds};`);
//         seconds++;
//     }
// }

// вышло без 1 секунды

// -----------------2 variant------------------

// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// while (hours < 3) {
//     while (minutes < 60) {
//         while (seconds < 60) {
//             if (hours < 10) {
//                 hours = '0' + hours;
//             }
//             if (minutes < 10) {
//                 minutes = '0' + minutes;
//             }
//             if (seconds < 10) {
//                 seconds = '0' + seconds;
//             }
//             let clock = hours + ':' + minutes + ':' + seconds;
//             console.log(clock);
//             hours = parseInt(hours);
//             minutes = parseInt(minutes);
//             seconds = parseInt(seconds);
//             seconds++
//         }
//         seconds = 0;
//         minutes++
//         if (hours === 2 && minutes === 21){
//             minutes = 60;
//         }
//         if(hours === 2 && minutes === 20){
//             seconds = 61;
//         }
//     }
//     minutes = 0;
//     hours++
// }

// -------------****************-----------------
// THIS IS IT
// for (let h = 0; h < 3; h++) {
//     for (let m = 0; m < 60; m++) {
//         for (let s = 0; s < 60; s++) {
//             document.write(`${h} ${m} ${s} <br/>`);    
//             if (h === 2 && m === 20 && s ===0){break;}
//         }
//         if (h === 2 && m === 20){break;}
//     }
// }


// ---- Max's code
// const maxH = 2;
// for (let h = 0; h <= maxH; h++) {
//   ;
//   let min = 0;
//   let sec = 0;
//   if (h < maxH) {
//     for (; min < 60; min++) {
//       sec = 0;
//         for (; sec < 60; sec++) {
//           document.write(`${h} год  ${min} мин  ${sec} сек <br/>`);
//         }
//     }
//   } else if (h === maxH) {
//     for (; min <= 20; min++) {
//       sec = 0;
//       if (min < 20) {
//         for (; sec < 60; sec++) {
//           document.write(`${h} год  ${min} мин  ${sec} сек <br/>`);
//         }
//       } else if (min === 20) {
//         document.write(`${h} год  ${min} мин  ${sec} сек <br/>`);
//       }
//     }
//   }
// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let res = '';
// for (let i = 0; i < arr.length; i++) {
//     res = res + arr[i];
// }

// document.write(res);
// console.log(res);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let i = 0;
// let res1 = '';
// while (i < arr.length) {
//     res1 = res1 + arr[i];
//     i++;
// }

// document.write(res1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr111 = ['a', 'b', 'c'];
// let res = '';

// for (const i of arr111) {
    
//     res = res + i;
// }

// document.write(res);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

//уже было  --- повтор

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 
// 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];

// for (let i = 1; i < 4; i++) {
//     arr.push(i);
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1, 2, 3];

// arr.shift();
// arr.shift();
// arr.push(2);
// arr.push(1);

// console.log(arr);
// ------------------- 2 variant
// let arr1 = [1, 2, 3];

// let arr2 = arr1.reverse();
// console.log(arr2);

// ------------------------3 variant

// let arr = [1, 2, 3];
// let rra = [];
// let ww = arr.length;

// for (let i = 0; i < ww; i++ ) {
//     //  arr.shift();
//     // let a = arr.shift();
//     rra.unshift(arr.shift());
// }
// console.log(rra);

// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let qqq = [1, 2, 3];

// for (let i = 4; i <= 6; i++) {
//     qqq.push(i);
// }

// console.log(qqq);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let qqq = [1, 2, 3];

// for (let i = 6; i > 3; i--) {
//     qqq.unshift(i);
// }

// console.log(qqq);

// - Дан масив ['js', 'css', 'jq']. 
// Виведіть на екран перший елемент за допомогою shift()

// let rrr = ['js', 'css', 'jq'];

// console.log(rrr.shift());

// - Дан масив ['js', 'css', 'jq']. 
// Виведіть на екран останній елемент за допомогою pop()

// let rrr = ['js', 'css', 'jq'];

// console.log(rrr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice
//  перетворіть масив в [4, 5].

// let arr = [1, 2, 3, 4, 5];

// let arrSl = arr.slice(3, 5);
// console.log(arrSl);

// - Дан масив [1, 2, 3, 4, 5]. 
// За допомогою методу/функції slice перетворіть масив в [1,2].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 2));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice 
// перетворіть масив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2)
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. 
// За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції
//  splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// let q = arr;
// q.splice(6, 0, 'c');
// let e = q;
// e.splice(8, 0, 'e'); // можно пушем
// let y = e;
// console.log(y);


// - Взяти масив з 10 чисел або створити його. 
// Вивести в консоль тільки ті елементи, значення яких є парними.

// let qqq = [0, 1, 5, 7, 8, 10, 6, 5, 7, 8];

// for (let i = 0; i < qqq.length; i++) {
//     let e = qqq[i];
//     if ( e % 2 === 0) {
//         console.log(e);
//     }
// }

// - Взяти масив з 10 чисел або створити його. 
// Створити 2й порожній масив. За допомогою будь-якого циклу та push ()
//  скопіювати значення одного масиву в інший

// let qqq = [0, 1, 5, 7, 8, 10, 6, 5, 7, 8];
// let ttt = [];

// for (let i = 0; i < qqq.length; i++) {
//     let e = qqq[i];
    
//     ttt.push(e);
// }

// console.log(ttt);

// - Взяти масив з 10 чисел або створити його.
//  Створити 2й порожній масив. За допомогою будь-якого циклу 
//  скопіювати значення одного масиву в інший.

// let qqq = [0, 1, 5, 7, 8, 10, 6, 5, 7, 8];
// let ttt = [];

// for (let i = 0; i < qqq.length; i++) {
//     let e = qqq[i];
    
//     ttt[i] = e;
// }

// console.log(ttt);


// ============ СТАРАЯ ПРОГРАММА - ДЗ

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.


// 1 ================== СТАРАЯ ПРОГРАММА - КЛАСС

//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//  2. вывести на консоль  каждый третий елемент
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.


// let obj = {
//     a: 1,
//     cv: 5, 
//     fff: 3
// };

// let keys = Object.keys(obj);
// let values = Object.values(obj);
// let all = Object.assign(obj);

// console.log(keys);
// console.log(values);
// console.log(all);
// console.log(obj, 'this is object');

// найти уникальное значение( и записать в объект)ж *************************************************************

// let arr = [1, 5, 6, 6, 1, 8, 0, 4, 4, 5];
// let obj = {};

// self
// for (const key of arr) {
//         // if (obj[key]){
//         //     // obj[i] = obj[i]+1;
//         //     obj[key]++;
//         // } else {
//         //     obj[key] = 1;
//         // };
//     !obj[key] ? obj[key] = 1 : obj[key]++;     
//     for (const key in obj) {

//         if (obj[key] > 1) {
//             delete obj[key];
//         }     
//     }
// }

// s.o.
// for (const i of arr) {
// console.log(obj[i]);

//     obj[i] ? obj[i]++ : obj[i] = 1;  
// }
// console.log(obj);

// let keys = Object.keys(obj);
// console.log(keys);
// console.log(keys['2']);

// // ******************or

// for (const key in obj) {
//     if (obj[key] > 1) {
//         delete obj[key];
//     }
// }

// console.log(obj);

    // let obj2 = {
    //     name: 'gerard',
    //     age: 28
    // }

    // let keysObj2 = Object.keys(obj2);
    // console.log(keysObj2);

    // for (const key2 of keysObj2) {
    //     if (obj2[key2] !== 28 ) {
    //         delete obj2[key2]
    //     }
    // }

    // console.log(obj2);
    // console.log(obj2[key2]);