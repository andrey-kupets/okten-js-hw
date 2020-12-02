//  //-------------1--------------------------

// function training(params) {
//     console.log('start this day');
//     setTimeout(() => {
//         params();
//     }, 1000);

// }

// training(() => {
//         console.log(1+1);
//         console.log('Woke up, fell out of bed');
// }) 
// console.log(22);

// //--------------2----------------------------------

// function training2(params) {
//     console.log('start this day222');
//     setTimeout(params(), 1000);
// }

// training2(() => {
//         console.log(2+2);
//         console.log('Woke up, fell out of bed222');
// }) 
// console.log(44);


//  // --------------------Витин код----------------------------

// function orderTour(money, taskWhenReady) {
//   console.log('Дякую, що звернулися до нас');
//   console.log('Tour in progres ......');

//   setTimeout(() => {
//     console.log('DONE');

//     if (money < 500) {
//       taskWhenReady('вам треба більше грошей', null);
//       return;
//     }
//     taskWhenReady(null, 'Єгипет');
//   }, 2000);
// }


// function prepareToTour(cb) {
//   setTimeout(() => {
//     console.log('Я забраввся!')
//     cb(null, 'Полетіли НАРЕШТІ !!!!');
//   }, 1000)
// }

// function doPhoto(cb) {
//   cb(null, 'ЩОЛК ЩОЛК')
// }

// orderTour(600, (err, tour) => {
//   if (err) {
//     console.log('Мала, треба їсти макарони');
//     console.log('В агенстві сказали що', err);
//     return;
//   }

//   console.log(`УРА. Лутимо в ${tour}`);

//   prepareToTour((err, data) => {
//     if (err) {
//       console.log('Бліне. Нема купальника (((');
//       return;
//     }

//     console.log(data);
//     doPhoto((err, data) => {
//       if (err) {
//         return
//       }
//       console.log(data);
//     })
//   })
// });    

//  // ----------------------мой код--------------------------
//  // ----------------------1 вариант--------------------------

// function aDayInTheLife(temperature, cb) {
//     console.log('a new day has just begun!!');
//     console.log('the alarm has just rung');
//     setTimeout(() => {
//         if (temperature > 38) {
//             console.log('stay in bed and call a doctor');
//             return;
//         }
//         cb();
//     }, 1000)
// };

// function whatWeather(degree, cb) {
//     setTimeout(() => {
//         if (degree < -30) {
//             console.log('are u crazy?! No Work today!!!');
//             return;
//         }
//         cb();
//     }, 500)
// }

// function eat(products, cb) {
//     setTimeout(() => {
//         if (products === "no") {
//             console.log('go to the shop and stay at home to cooking!!!');
//             return;
//         }
//         cb();
//     }, 700)

// }

// function coat(conditions, cb) {
//     setTimeout(() => {
//         if (conditions === "no") {
//             console.log("wait until i'll buy a coat and return home");
//             return;
//         }
//         cb();
//     }, 400)
    
// }

// function transport(conditions, cb) {
//     setTimeout(() => {
//         if (conditions === "i missed the tram") {
//             console.log("This is not my day!!!!");
//             return;
//         }
//         cb();
//     }, 300)
    
// }

// function dinnerBreak(time, cb) {
//     setTimeout(() => {
//         if (time >= 12 && time <= 13 ) {
//             console.log("Have a rest....don't disturb");
//             return;
//         }
//         cb();
//     }, 1200)
    
// }

// function timeOut(time, cb) {
//     setTimeout(() => {
//         if (time < 18) {
//             console.log('...time is money');
//             return;
//         }
//         console.log("i'm free now");
//         cb();
//     }, 600)
// }


// aDayInTheLife(37, () => {
//     console.log("look around: what is the weather?");
//     whatWeather( -15, () => {
//         console.log("U have to cook your breakfast");
//         console.log("Have you any products?");
//         eat('yes', () => {
//             console.log("Look into the cupboard and prepare your coat");
//             coat('yes', () => {
//                 console.log("you may go to work now");
//                 transport('i caught the tram', () => {
//                     console.log("get to work");
//                     dinnerBreak(15, () => {
//                         console.log("Boss says --- to work as a horse!!");
//                         timeOut(18, () => {
//                             console.log("THE WORK DAY IS DONE!!!");
//                         })
//                     });
//                 })
//             });
//         });
//     });
// })

// // -----------------2 вариант с err, data

// function aDayInTheLife(temperature, cb) {
//     console.log('a new day has just begun!!');
//     console.log('the alarm has just rung');
//     setTimeout(() => {
//         if (temperature > 38) {
//             cb('stay in bed and call a doctor', null);
//             return;
//         }
//         cb(null, "what is the weather?");
//     }, 1000)
// };

// function whatWeather(degree, cb) {
//     setTimeout(() => {
//         if (degree < -30) {
//             cb('are u crazy?! No Work today!!!', null);
//             return;
//         }
//         cb(null, "Have you any products?");
//     }, 500)
// }

// function eat(products, whatToDo) {
//     setTimeout(() => {
//         if (products === "no") {
//             whatToDo('go to the shop and stay at home to cooking!!!', null);
//             return;
//         }
//         whatToDo(null, "Look into the cupboard and prepare your coat");
//     }, 700)

// }

// function coat(conditions, whatToDo) {
//     setTimeout(() => {
//         if (conditions === "no") {
//             whatToDo("wait until i'll buy a coat and return home", null);
//             return;
//         }
//         whatToDo(null, "you may go to work now");
//     }, 400)
    
// }

// function transport(conditions, info) {
//     setTimeout(() => {
//         if (conditions === "i missed the tram") {
//             info("This is not my day!!!!", null);
//             return;
//         }
//         info(null, "get to work");
//     }, 300)
    
// }

// function dinnerBreak(time, someRest) {
//     setTimeout(() => {
//         if (time >= 12 && time <= 13 ) {
//             someRest("Have a rest....", null);
//             return;
//         }
//         someRest(null, "Boss says --- to work as a horse!!");
//     }, 1200)
    
// }

// function timeOut(time, info) {
//     setTimeout(() => {
//         if (time < 18) {
//             info('...time is money', null);
//             return;
//         }
//         info(null, "I'm free now!!!");

//     }, 600)
// }


// aDayInTheLife(37, (err, data) => {
//     if (err) {
//         console.log('wife said:', err);
//         return;
//     }
//     console.log(`look around: ${data}`);
//     whatWeather( -15, (err, data) => {
//         if (err) {
//             console.log('wife said:', err);
//             return;
//         } 
//         console.log('what will we do?', data);
//         console.log("U have to cook your breakfast");
//         eat('yes', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(`Hey! ${data}`);
//             coat('yes', (err, data) => {
//                 if (err) {
//                     console.log(`wife said: ${err}`);
//                     return;
//                 }
//                 console.log(`Oh, that's it. ${data}`);
//                 transport('i caught the tram', (err, data) => {
//                     if (err) {
//                         console.log(`Bad Luck!! ${err}`);
//                         return;
//                     }
//                     console.log(data);
//                     dinnerBreak(16, (err, data) => {
//                         if (err) {
//                             console.log(`${err}don't disturb`);
//                             return;
//                         }
//                         console.log(`${data}... and boss is always right`);
//                         timeOut(18, (err, data) => {
//                             if (err) {
//                                 console.log(err);
//                                 return;
//                             }
//                             console.log(`At last!! ${data}`);
//                             console.log("THE WORK DAY IS DONE!!!");
//                         })
//                     });
//                 })
//             });
//         });
//     });
// })

//  // --------------promise---------------------

// function aDayInTheLife(temperature) {
//     return new Promise((resolve, reject) => {
//         console.log('A new day has just begun!!');
//         console.log('The alarm has just rung');
//         setTimeout(() => {
//             if (temperature > 38) {
//                 reject('Stay in bed and call a doctor' );
//                 return;
//             }
//             resolve("Look around: what is the weather?");
//     }, 1000)
//     })
// };

// function whatWeather(degree) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (degree < -30) {
//                 reject('Are u crazy?! No work today!!!');
//                 return;
//             }
//             resolve("Have you any products?");
//         }, 500)
//     })    
// }

// function eat(products) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (products === "no") {
//                 reject('Go to the shop and stay at home to cooking!!!');
//                 return;
//             }
//             resolve("Look into the cupboard and prepare your coat");
//         }, 700)
//     })

// }

// function coat(conditions) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (conditions === "no") {
//                 reject("Wait until i'll buy a coat and return home");
//                 return;
//             }
//             resolve("You may go to work now");
//         }, 400)
//     })
// }

// function transport(conditions) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (conditions === "I missed the tram") {
//                 reject("This is not my day!!!!");
//                 return;
//             }
//             resolve("Get to work");
//         }, 300)
//     })
// }

// function dinnerBreak(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time >= 12 && time <= 13 ) {
//                 reject("Have a rest....don't disturb");
//                 return;
//             }
//             resolve("Boss says --- to work as a horse!!");
//         }, 1200)
//     })
// }

// function timeOut(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 18) {
//                 reject('...time is money');
//                 return;
//             }
//             resolve("I'm free now");
//         }, 600)
//     })    
// }


// aDayInTheLife(37)
//     .then(value => {
//         console.log(value);
//         return whatWeather();
//     })
//     .then(value => {
//         console.log("U have to cook your breakfast");
//         console.log(value);
//         return eat();
//     })
//     .then(value => {
//         console.log(value);
//         return coat();
//     })
//     .then(value => {
//         console.log(value);
//         return transport();
//     })
//     .then(value => {
//         console.log(value);
//         return dinnerBreak();
//     })        
//     .then(value => {
//         console.log(value);
//         return timeOut(); 
//     })
//     .then(value => {
//         console.log(value);
//         console.log("The working day is done!!!")// finally?
//     })  
//     .catch(err => {
//         console.log('-----------------')
//         console.log(err)
//         console.log('-----------------')})  
//     .finally(() => {
//         console.log("THAT'S THE END OF A TASK...");
//     })


    // // --------------------async await------------------

//     function aDayInTheLife(temperature) {
//         return new Promise((resolve, reject) => {
//             console.log('A new day has just begun!!');
//             console.log('The alarm has just rung');
//             setTimeout(() => {
//                 if (temperature > 38) {
//                     reject('Stay in bed and call a doctor' );
//                     return;
//                 }
//                 resolve("Look around: what is the weather?");
//         }, 1000)
//         })
//     };
    
//     function whatWeather(degree) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (degree < -30) {
//                     reject('Are u crazy?! No work today!!!');
//                     return;
//                 }
//                 resolve("Have you any products?");
//             }, 500)
//         })    
//     }
    
//     function eat(products) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (products === "no") {
//                     reject('Go to the shop and stay at home to cooking!!!');
//                     return;
//                 }
//                 resolve("Look into the cupboard and prepare your coat");
//             }, 700)
//         })
    
//     }
    
//     function coat(conditions) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (conditions === "no") {
//                     reject("Wait until i'll buy a coat and return home");
//                     return;
//                 }
//                 resolve("You may go to work now");
//             }, 400)
//         })
//     }
    
//     function transport(conditions) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (conditions === "I missed the tram") {
//                     reject("This is not my day!!!!");
//                     return;
//                 }
//                 resolve("Get to work");
//             }, 300)
//         })
//     }
    
//     function dinnerBreak(time) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (time >= 12 && time <= 13 ) {
//                     reject("Have a rest....don't disturb");
//                     return;
//                 }
//                 resolve("Boss says --- to work as a horse!!");
//             }, 1200)
//         })
//     }
    
//     function timeOut(time) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (time < 18) {
//                     reject('...time is money');
//                     return;
//                 }
//                 resolve("I'm free now");
//             }, 600)
//         })    
//     }    

// async function allDayLong() {
//     try {
//         const OneDayInTheLife = await aDayInTheLife(37);
//         console.log(OneDayInTheLife);
//         const ifWheather = await whatWeather(-15);
//         console.log("U have to cook your breakfast");
//         console.log(ifWheather);
//         const ifEat = await eat();
//         console.log(ifEat);
//         const ifCoat = await coat();
//         console.log(ifCoat);
//         const ifTransport = await transport();
//         console.log(ifTransport);
//         const ifDinnerBreak = await dinnerBreak();
//         console.log(ifDinnerBreak);
//         const ifTimeOut = await timeOut();
//         console.log(ifTimeOut);
//         console.log("The working day is done!!!")
//     } catch (error) {
//         console.log('*****************');
//         console.log(error);
//         console.log('*****************');
//     }
// }

// allDayLong();

// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)   

// function h() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('H');
//             }, Math.random()*1000);
//     })
// }

// function e() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('e');
//             }, Math.random()*1000);
//     })
// }

// function l() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('l');
//             }, Math.random()*1000);
//     })
// }

// function l2() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('l');
//             }, Math.random()*1000);
//     })
// }

// function o() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('o')
//             }, Math.random()*1000);
//     })
// }

// function voidt() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(' ')
//             }, Math.random()*1000);
//     })
// }

// function w() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('W')
//             }, Math.random()*1000);
//     })
// }

// function o2() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('o')
//             }, Math.random()*1000);
//     })
// }

// function r() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('r')
//             }, Math.random()*1000);
//     })
// }

// function l3() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('l')
//             }, Math.random()*1000);
//     })
// }

// function d() {
//     return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve('d')
//             }, Math.random()*1000);
//     })
// }

// async function printWord() {
//     const printH = await h();
//     document.write(printH);
//     const printE = await e();
//     document.write(printE);
//     const printL = await l();
//     document.write(printL);
//     const printL2 = await l2();
//     document.write(printL2);
//     const printO = await o();
//     document.write(printO);
//     const printvoid = await voidt();
//     document.write(printvoid);
//     const printW = await w();
//     document.write(printW);
//     const printO2 = await o2();
//     document.write(printO2);
//     const printR = await r();
//     document.write(printR);
//     const printL3 = await l3();
//     document.write(printL3);
//     const printD = await d();
//     document.write(printD);
// }

// printWord();



// --------------recursion --- код Витали------------------
// arr = 'Hello World Hello World'.split('');
// console.log(arr);

// let count = 0;
// function typeWriter(arr) {
//     if (count > arr.length - 1) {
//         return; 
//     }
//     setTimeout(() => {
//         return document.write(arr[count++]) + typeWriter(arr);
//     }, Math.random() * 1000);
// }

// typeWriter(arr);

//  ----------async with loops - код Макса - я убрал рандомайзер--------------
// const str = 'Hello World';
// console.log([...str]);


// function typeWriter() {
//     return new Promise((resolve) => {
//         setTimeout(resolve, Math.random() * 1000);
//     })
// }

// async function delayedWrite(litera) {
//     await typeWriter();
//     document.write(litera);
// }

// async function iterateArr(array) {
//     for (const item of array) {
//         await delayedWrite(item);
//     }
// }

// iterateArr([...str]);

// -------------------- by myself()--------
const str = 'Hello World';
// console.log([...str]);

function typeWriter(litera) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(document.write(litera));
        }, Math.random() * 1000);
    })
}

async function iterateArr(array) {
    for (const item of array) {
        await typeWriter(item);
    }
}

iterateArr([...str]);