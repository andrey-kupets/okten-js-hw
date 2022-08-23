// --------------Перебор массива (перемножение/суммирование элементов)---------------

// let array = ['1', '2', '3', '4'];
// i = array.length, result = 1;

// while (i > 0)
//   result *= array[--i];

// for (let i = 0; i < array.length; i++) {
//     result *= array[i];
// }
// console.log(result);


// ----------------- Выравнивание массива рекурсией ------------------

// let arrOfArrs = [1, ['a', 'ssss', [2, 4, ['hello', 'memo', [5,7,99,0, [false, 'general', 66, [0, undefined]]]]]]];

// const flatten = (arr) => {
//     const flattenedArr = [];
//     arr.forEach(el => {
//         if (Array.isArray(el) && el.length > 0) {
//             const temp = flatten(el);
//             temp.forEach(elem => flattenedArr.push(elem))
//         } else {
//             flattenedArr.push(el)
//         }
        
//     })

//     return flattenedArr;
// }

// console.log(flatten(arrOfArrs));


// --------------Перебор массива (рекурсия сумма, произведение)---------------

// const sum = function(array) {
//     if(array.length === 0){
//         return 0;
//     }
//     function add(array, i){
//         console.log(array[i]);
//         if(i === array.length-1){
//             return array[i];
//         }
//         return array[i] + add(array, ++i);
//     }
//     return add(array, 0);
// };

// console.log(sum([1, 2, 3, 4, 5, 6])); //21


// const product = (array) => {
//     if (array === undefined ) {
//         return 'there in no definition'
//     }
//     if (!array.length || !Array.isArray(array)) {
//         return 'there is empty array or not array';
//     };

//     const multiply = (array, i) => {
//         if (i === array.length - 1) {
//             return array[i];            
//         }
//         return array[i] * multiply(array, i+1);
//     };
//     return multiply(array, 0);
// }

// console.log(product([1, 2, 3, 4, 5, 6]));


//  ------------ суммирование массива слайсом-----------

// array = [1,2,3,4,5];
// var sum = function(array) {
//     return (array.length === 0) ? 0 : array[0] + sum(array.splice(1));
// }

// // or in ES6

// var sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
// console.log(sum(array));
// console.log(array);

// const arr = [2,3,4,5];

// console.log(arr.splice(1));
// console.log(arr);

// console.log(arr.slice(1,3));
// console.log(arr);


// без доп функции эдд(мультиплай), но с вводом доп аргумента 0
// var sum = function(array, i) {
//     if(array.length === 0){
//         return 0;
//     }
//   console.log(array[i]);
//   if(i === array.length-1){
//     return array[i];
//   }
//   return array[i] + sum(array, i+1);
// };
// console.log(sum([1, 2, 3, 4, 5, 6],0)) //21

// const product = (array, i) => {
//     if (array.length === 0) {
//         return 'an empty array';
//     }

//     return i === array.length-1 
//     ? array[i]
//     : array[i] * product(array, ++i);
// }

// console.log(product([1, 2, 3, 45, 2], 0));

// -------------- С уменьшением :

// function sum(a, b) {
//   return a + b;
// }

// const array = [1, 2, 3, 4, 5, 6];

// //In our reduce, we will apply our sum function, 
// //and pass the result as the next value
// const res = array.reduce(sum);

// // ----------------- С рекурсией :

// function sumRec(array, acc = 0, index) {
//     //We will update our accumulator, and increment
//   // the value of our current index
//   return index === array.length
//   ? acc
//   : sumRec(array, acc += array[index], ++index);
// }

// console.log(sumRec(array, 0, 0));

// суммирование шифтом!!

// function sumNumbersRecursively(input){
//     if (input.length == 0){
//         return 0;
//     } 
//     return input.shift() + sumNumbersRecursively(input);
// }

// console.log(sumNumbersRecursively([2,3,4]))

// ------------------- умножение шифтом!! -----------------

// function sumNumbersRecursively(input){
//     if (input.length == 0){
//         return 1;
//     } 
//     return input.shift() * sumNumbersRecursively(input);
// }

// console.log(sumNumbersRecursively([2,3,4]))

// ------------------- pop -----------------

// function sumArr(arr){
//     if(arr.length>1){
//       return arr.pop()+sumArr(arr);
//     }else{
//       return arr[0];
//     }
//   }

  // console.log(sumArr([2,3,4]));

//   function sumArr(arr){
//     if(arr.length>1){
//       return arr.pop()*sumArr(arr);
//     }else{
//       return arr[0];
//     }
//   }

//   console.log(sumArr([2,3,4]));

// -------  array Summing --------------
// 
// arr = [1,2,3,4,5];
// 
// const qwe = (arr,i) => {

//     // if (arr.length - 1 === i) {
//     //     return arr[i];
//     // }
//     // return arr[i] + qwe(arr, ++i);

//     return arr.length - 1 === i ? arr[i] : arr[i] + qwe(arr, ++i);
// }
// 
// console.log(qwe(arr,0));


// const iterate = (array) => {
// for (let i = 0; i < array.length; i++) {
//   const el = array[i];
//   if (!(el % 2)) {
//     console.log(el);
//   }
// }

// }

// iterate([1, 2, 3, 4, 5, 6]);