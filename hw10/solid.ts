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
// наследуемый класс должен дополнять, 
// а не замещать поведение родительского
// (например при имплементации этих классов в функциях)

// class DB {
//     connect() {}
//     read() {}
//     write() {}
//     // jointables() {} // violation of principle
// }

// class SQLDB extends DB {
//     connect() {};
//     read() {};
//     write() {};
//     jointables() {}; // + extention
// }

// class NoSQLDB extends DB {
//     connect() {};
//     read() {};
//     write() {};
//     createindex() {}; // can't use jointables-method - it would be a substitute of method ("throw error"), cause NoSQL-class: no tables
// }

// class MySQLDB extends SQLDB {
//     connect() {};
//     read() {};
//     write() {};
//     jointables() {}; 
// }

// class MongoDB extends NoSQLDB {
//     connect() {};
//     read() {};
//     write() {};
//     createindex() {}; 
//     mergeDocuments() {};
// }

// function startApp(database: DB) {
//     database.connect();
// }

// startApp(new MySQLDB());
// startApp(new MongoDB());


// 4 Interface segregation principle
// программные сущности не должны зависеть от методов,
// которые они не используют

// interface HttpRequest {
//     get: () => void;
//     post: () => void;
//     put: () => void;
//     delete: () => void;
//     // addToken: () => void; // - vioaltion of principle. can't use in ServerHttp class  
// }

// interface TokenStorage { // create new interface for Client class only
//     addToken: () => void;
//     getToken: () => void;
// }

// class ServerHttp implements HttpRequest {
//     get(): void {};
//     post(): void {};
//     put(): void {};
//     delete(): void {};
//     // addToken(): void { // don't implement!
//     //    throw new Error("not impemented");
//     // }  
// }

// class ClientHttp implements HttpRequest, TokenStorage { // use TokenStorage separately from Server, for Client only
//     get(): void {};
//     post(): void {};
//     put(): void {};
//     delete(): void {};
//     addToken(): void { // implement for Client!
//        return localStorage.get('token');
//     } 
    
//     getToken: () => void;
// }


// 5. dependency inversion principle
// модули более высокго уровня не должны зависеть
// от модулей более более низкого уровня 

interface MusicApi {
    getTracks: () => void;
}

class GoogleMusicApi implements MusicApi {
    // get() {} // implements interface single method
    getTracks(): void {};
}

class SpotifyMusicApi {
    // findAll() {} // implements interface single method
    getTracks(): void {};
}

class YouTubeMusicApi {
    // query() {} // implements interface single method
    getTracks(): void {};
}

class MusicClient implements MusicApi {
    client: MusicApi;

    constructor(client: MusicApi) {
        this.client = client;
    }

    getTracks() {
        this.client.getTracks();
    }
}

const MusicApp = () => {
    // const API: MusicApi = new SpotifyMusicApi();
    const API = new MusicClient(new SpotifyMusicApi()); // single place for change due to abstraction "MusicClient"

    API.getTracks();
}