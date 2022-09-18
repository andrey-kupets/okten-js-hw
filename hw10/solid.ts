// 2 open-closed principle

// interface Attacker {
//     attack: () => void; // add for right way of principle
// }

// class Weapon implements Attacker {
//     damage: number;
//     range: number;

//     constructor(damage: number, range: number) {
//         this.damage = damage;
//         this.range = range;
//     }

//     attack() {
//         // Violation of the principle
//         // this.type === 'sword' && console.log(`Удар мечом, урон: ${this.damage}`);
//         // this.type === 'crossbow' && console.log(`Удар с арбалета, урон: ${this.damage}`);
//     }
// }

// class Sword extends Weapon {
//     attack() {
//         console.log(`Удар мечом, урон: ${this.damage}`);
//     }
// }

// class Crossbow extends Weapon {
//     attack() {
//         console.log(`Удар с арбалета, урон: ${this.damage}`);
//     }
// }

// class Character {
//     name: string;
//     weapon: Weapon;

//     constructor(name: string, weapon: Weapon) {
//         this.name = name;
//         this.weapon = weapon;
//     }

//     changeWeapon(newWeapon: Weapon) {
//         this.weapon = newWeapon;
//     }

//     attack() { // don't need
//         this.weapon.attack();
//     }
// }

// const sword = new Sword( 15, 2);
// const character = new Character('warrior', sword);
// character.attack();

// const crossbow = new Crossbow( 10, 100);
// character.changeWeapon(crossbow);
// character.attack();

// 3 Liskov substitution principle
// функционал использования дочерних классов дополняет, но не замещает поведение родительских (например в функциях)

class DB {
    connect() {}
    read() {}
    write() {}
    // jointables() {} // violation of principle
}

class SQLDB extends DB {
    connect() {};
    read() {};
    write() {};
    jointables() {}; // + extention
}

class NoSQLDB extends DB {
    connect() {};
    read() {};
    write() {};
    createindex() {}; // can't use jointables-method - it would be a substitute of method ("throw error"), cause NoSQL-class: no tables
}

class MySQLDB extends SQLDB {
    connect() {};
    read() {};
    write() {};
    jointables() {}; 
}

class MongoDB extends NoSQLDB {
    connect() {};
    read() {};
    write() {};
    createindex() {}; 
    mergeDocuments() {};
}

function startApp(database: DB) {
    database.connect();
}

startApp(new MySQLDB());
startApp(new MongoDB());

