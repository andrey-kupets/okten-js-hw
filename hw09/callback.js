let energy = 1000;

function msg(msg, en) {
    console.log(msg);
    console.log(`У меня осталось ${en} энергии`)
    console.log('-------------------------');
}

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
//         en -= 1000;
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
///////////////////////////////////////////////////////////////////////////

function wakeUp(en) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            en -= 200;
            if (en <= 0) {
                reject('Умер посыпаясь')
            }
            msg('Проснулся', en)
            resolve(en)
        }, 2000)
    })
}

function eat(en) {
    return new Promise(resolve => {
        setTimeout(() => {
            en += 200;
            msg('Поел', en)
            resolve(en)
        }, 1000)
    })
}

function goToWork(en) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            en -= 500;
            if (en <= 0) {
                reject('Умер не дойдя до работы');
            }
            msg('Я на работе', en)
            resolve(en)
        }, 500)
    })
}

function goToHome(en) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            en -= 500;
            if (en <= 0) {
                reject('Умер не дойдя до дома')
                return;
            }
            msg('Я дома', en)
            resolve(en)
        }, 4000)
    })
}

function sleep(en) {
    return new Promise(resolve => {
        setTimeout(() => {
            en = 1000
            msg('Я заснул', en)
            resolve(en)
        }, 600)
    })
}

wakeUp(energy)
    .then(value => {
        return eat(value)
    })
    .then(value => {
        return goToWork(value)
    })
    .then(value => {
        return eat(value)
    })
    .then(value => {
        return goToHome(value)
    })
    .then(value => {
        return sleep(value)
    })
    .catch(err => console.log(err))
