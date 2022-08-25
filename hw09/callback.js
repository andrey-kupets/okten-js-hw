// =====================little example=======================
//
// const data = 333;
// const getSalary = (m, cb) => {
//     setTimeout(() => {
//         m += 1000;
//         console.log(`I get ${m-data}$ salary and have ${m}$ left`)
//         cb(null, m)
//         // console.log(m)
//     }, 1000)
// }
//
// const buyShoes = (m, cb) => {
//     setTimeout(() => {
//         m -=500;
//         console.log(`I only have ${m}$ left because of buying shoes`)
//     }, 500)
// }
//
// getSalary(data, (err, data) =>{
//     buyShoes(data, (err, data) => {
//
//     })
// })
//
// ****************** in promise ****************************
//
// const data = -500;
// const getSalary = (m) => {
//     return new Promise(((resolve, reject) => {
//         m += 1000;
//         if (m < 500) {
//             reject(`ya have ${m}$ only and need more money`);
//         }
//         resolve(m)
//     }))
// }
//
// const buyShoes = (m) => {
//     return new Promise(((resolve) => {
//         setTimeout(() => {
//             m -=500;
//             resolve(`I only have ${m}$ left because of buying shoes`)
//         }, 500)
//     }))
// }
//
// getSalary(data)
//     .then(res => {
//         console.log(`I get ${res - data}$ salary and have ${res}$ left`);
//         return buyShoes(res)
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

/////////////////////////////////////////////////////////////////////////
//
// let energy = 1000;
//
// function msg(msg, en) {
//     console.log(msg);
//     console.log(`У меня осталось ${en} энергии`)
//     console.log('-------------------------');
// }
//
// function wakeUp(en, cb) {
//     setTimeout(() => {
//         en -= 200;
//         if (en <= 0) {
//             cb('Умер посыпаясь')
//             return;
//         }
//         msg('Проснулся', en)
//         cb(null, en)
//     }, 2000)
// }
//
// function eat(en, cb) {
//     setTimeout(() => {
//         en += 200;
//         msg('Поел', en)
//         cb(null, en)
//     }, 1000)
// }
//
// function goToWork(en, cb) {
//     setTimeout(() => {
//         en -= 1000; // specially for error catching
//         if (en <= 0) {
//             cb('Умер не дойдя до работы');
//             return;
//         }
//         msg('Я на работе', en)
//         cb(null, en)
//     }, 500)
// }
//
// function goToHome(en, cb) {
//     setTimeout(() => {
//         en -= 500;
//         if (en <= 0) {
//             cb('Умер не дойдя до дома')
//             return;
//         }
//         msg('Я дома', en)
//         cb(null, en)
//     }, 4000)
// }
//
// function sleep(en, cb) {
//     setTimeout(() => {
//         en = 1000
//         msg('Я заснул', en)
//         cb(null, en)
//     }, 600)
// }
//
// wakeUp(energy, (err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     eat(data, (err, data)=>{
//         goToWork(data, (err, data)=>{
//             if (err){
//                 console.log(err);
//                 return ;
//             }
//             eat(data, (err, data)=>{
//                 goToHome(data, (err, data)=>{
//                     if (err){
//                         console.log(err)
//                         return ;
//                     }
//                     sleep(data, (err, data)=>{
//
//                     })
//                 })
//             })
//         })
//     })
// })
//
///////////////////////////////////////////////////////////////////////////
//
// function wakeUp(en) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             en -= 200;
//             if (en <= 0) {
//                 reject('Умер посыпаясь')
//             }
//             msg('Проснулся', en)
//             resolve(en)
//         }, 2000)
//     })
// }
//
// function eat(en) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             en += 200;
//             msg('Поел', en)
//             resolve(en)
//         }, 1000)
//     })
// }
//
// function goToWork(en) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             en -= 500;
//             if (en <= 0) {
//                 reject('Умер не дойдя до работы');
//             }
//             msg('Я на работе', en)
//             resolve(en)
//         }, 500)
//     })
// }
//
// function goToHome(en) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             en -= 500;
//             if (en <= 0) {
//                 reject('Умер не дойдя до дома')
//                 return;
//             }
//             msg('Я дома', en)
//             resolve(en)
//         }, 4000)
//     })
// }
//
// function sleep(en) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             en = 1000
//             msg('Я заснул', en)
//             resolve(en)
//         }, 600)
//     })
// }
//
// wakeUp(energy)
//     .then(value => {
//         return eat(value)
//     })
//     .then(value => {
//         return goToWork(value)
//     })
//     .then(value => {
//         return eat(value)
//     })
//     .then(value => {
//         return goToHome(value)
//     })
//     .then(value => {
//         return sleep(value)
//     })
//     .catch(err => console.log(err))

// ************** all/allSettled ********************

// const qq = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             reject(`server is fallen down`)
//         }, 1000)
//     })
// }
//
// const ww = () => {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`catcha!!!`)
//         }, 1500)
//     }))
// }
//
// const allPromises = Promise.all([qq().catch(() => {}),ww()]);
// const allSettled = Promise.allSettled([qq(),ww()]);
// const firstPromise = Promise.race([qq(),ww()]);
//
// allPromises
//     .then(value => {
//     console.log(value);
// })
    // .catch((e) => {
    //     console.log(e)
    // })

// allSettled
//     .then(value => {
//         console.log(value);
//     })
//     .catch((e) => {
//         console.log(e)
//     })
//
// firstPromise
//     .then(value => {
//     console.log(value)
// })
//     .catch((e) => {
//         console.log(e)
//     })


// ****************** FETCH + '?.' ***************

// fetch('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));

// fetch('https://api.sampleapis.com/futurama/characters')
// .then(res => res.json())
// .then(array => {
//     array.forEach(element => {
//         const pic = document.createElement('img');
//         pic.src = element.images?.main;
//         document.body.appendChild(pic);

//         const br = document.createElement('br');
//         document.body.appendChild(br);

//         console.log(element.images?.main)
//     });
//     })
