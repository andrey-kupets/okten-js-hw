// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false 
// Вывести каждую при помощи console.log , alert, document.write

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bull1 = true;
let bull2 = false;

// console.log(a);
// alert(a);
// document.write(a);

// console.log(b);
// alert(b);
// document.write(b);

// console.log(c);
// alert(c);
// document.write(c);

// console.log(d);
// alert(d);
// document.write(d);

// console.log(num1);
// alert(num1);
// document.write(num1);

// console.log(num2);
// alert(num2);
// document.write(num2);

// console.log(num3);
// alert(num3);
// document.write(num3);

// console.log(num4);
// alert(num4);
// document.write(num4);

// console.log(num5);
// alert(num5);
// document.write(num5);

// console.log(num6);
// alert(num6);
// document.write(num6);

// console.log(num7);
// alert(num7);
// document.write(num7);

// console.log(bull1);
// alert(bull1);
// document.write(bull1);

// console.log(bull2);
// alert(bull2);
// document.write(bull2);


// - переопределить каждую переменную из задания 1 дав им произвольные значения
// Вывести каждую при помощи console.log , alert, document.write

a = 'js';
b = 'rules';
c = 'every';
d = 'time';
num1 = 111;
num2 = 44.8;
num3 = -888;
num5 = -3.14;
num6 = 5*8-3;
num7 = 555**2;
bull1 = false;
bull2 = true;

// console.log(a);
// alert(a);
// document.write(a);

// console.log(b);
// alert(b);
// document.write(b);

// console.log(c);
// alert(c);
// document.write(c);

// console.log(d);
// alert(d);
// document.write(d);

// console.log(num1);
// alert(num1);
// document.write(num1);

// console.log(num2);
// alert(num2);
// document.write(num2);

// console.log(num3);
// alert(num3);
// document.write(num3);

// console.log(num4);
// alert(num4);
// document.write(num4);

// console.log(num5);
// alert(num5);
// document.write(num5);

// console.log(num6);
// alert(num6);
// document.write(num6);

// console.log(num7);
// alert(num7);
// document.write(num7);

// console.log(bull1);
// alert(bull1);
// document.write(bull1);

// console.log(bull2);
// alert(bull2);
// document.write(bull2);

// - Создать 3 числовых и 3 стринговых константы. 
// Вывести каждую при помощи console.log , alert, document.write

// const num11 = 3.14;
// const num21 = 0;
// const num31 = 3.14**3;

// const a1 = "it's";
// const b1 = 'hard';
// const c1 = 'to find';

// console.log(num11);
// alert(num11);
// document.write(num11);

// console.log(num21);
// alert(num21);
// document.write(num21);

// console.log(num31);
// alert(num31);
// document.write(num31);

// console.log(a1);
// alert(a1);
// document.write(a1);

// console.log(b1);
// alert(b1);
// document.write(b1);

// console.log(c1);
// alert(c1);
// document.write(c1);


// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. 
// Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

// let secondName = prompt('Enter yr secondName');
// let firstName = prompt('Enter yr firstName');
// let patronymic = prompt('Enter yr patronymic');

// console.log(secondName);
// alert(secondName);
// document.write(secondName);

// console.log(firstName);
// alert(firstName);
// document.write(firstName);

// console.log(patronymic);
// alert(patronymic);
// document.write(patronymic);


// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = secondName + ' ' + firstName + ' ' + patronymic;

document.write(person);


// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let secondNameMother = prompt('Enter yr secondName');
let firstNameMother = prompt('Enter yr firstName');
let patronymicMother = prompt('Enter yr patronymic');
let secondNameSon = prompt('Enter yr secondName');
let firstNameSon = prompt('Enter yr firstName');
let patronymicSon = prompt('Enter yr patronymic');

let personMother = secondNameMother + ' ' + firstNameMother + ' ' + patronymicMother;
let personSon = secondNameSon + ' ' + firstNameSon + ' ' + patronymicSon;

document.write(personMother);

document.write(personSon);

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));


// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
//     parseInt("435")
//     parseInt("Вася")

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert



// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!