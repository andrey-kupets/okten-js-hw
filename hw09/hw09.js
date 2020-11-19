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

function aDayInTheLife(temperature, cb) {
    console.log('a new day has just begun!!');
    console.log('the alarm has just rung');
    setTimeout(() => {
        if (temperature > 38) {
            cb('stay in bed and call a doctor', null);
            return;
        }
        cb(null, "what is the weather?");
    }, 1000)
};

function whatWeather(degree, cb) {
    setTimeout(() => {
        if (degree < -30) {
            cb('are u crazy?! No Work today!!!', null);
            return;
        }
        cb(null, "Have you any products?");
    }, 500)
}

function eat(products, whatToDo) {
    setTimeout(() => {
        if (products === "no") {
            whatToDo('go to the shop and stay at home to cooking!!!', null);
            return;
        }
        whatToDo(null, "Look into the cupboard and prepare your coat");
    }, 700)

}

function coat(conditions, whatToDo) {
    setTimeout(() => {
        if (conditions === "no") {
            whatToDo("wait until i'll buy a coat and return home", null);
            return;
        }
        whatToDo(null, "you may go to work now");
    }, 400)
    
}

function transport(conditions, info) {
    setTimeout(() => {
        if (conditions === "i missed the tram") {
            info("This is not my day!!!!", null);
            return;
        }
        info(null, "get to work");
    }, 300)
    
}

function dinnerBreak(time, someRest) {
    setTimeout(() => {
        if (time >= 12 && time <= 13 ) {
            someRest("Have a rest....", null);
            return;
        }
        someRest(null, "Boss says --- to work as a horse!!");
    }, 1200)
    
}

function timeOut(time, info) {
    setTimeout(() => {
        if (time < 18) {
            info('...time is money', null);
            return;
        }
        info(null, "I'm free now!!!");

    }, 600)
}


aDayInTheLife(37, (err, data) => {
    if (err) {
        console.log('wife said:', err);
        return;
    }
    console.log(`look around: ${data}`);
    whatWeather( -15, (err, data) => {
        if (err) {
            console.log('wife said:', err);
            return;
        } 
        console.log('what will we do?', data);
        console.log("U have to cook your breakfast");
        eat('yes', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Hey! ${data}`);
            coat('yes', (err, data) => {
                if (err) {
                    console.log(`wife said: ${err}`);
                    return;
                }
                console.log(`Oh, that's it. ${data}`);
                transport('i caught the tram', (err, data) => {
                    if (err) {
                        console.log(`Bad Luck!! ${err}`);
                        return;
                    }
                    console.log(data);
                    dinnerBreak(16, (err, data) => {
                        if (err) {
                            console.log(`${err}don't disturb`);
                            return;
                        }
                        console.log(`${data}... and boss is always right`);
                        timeOut(18, (err, data) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log(`At last!! ${data}`);
                            console.log("THE WORK DAY IS DONE!!!");
                        })
                    });
                })
            });
        });
    });
})








