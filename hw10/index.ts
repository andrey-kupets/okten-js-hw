// // 1 incapsulation: getters & setters
// class Rectangle {
//     private _width: Number;
//     private _height: Number;

//     constructor(w: Number, h: Number) {
//         this._width = w;
//         this._height = h;
//     }

//     public get width() {
//         return this._width;
//     }

//     public set width(w: Number) {

//         if (w < 0) {
//             this._width = 1;
//             return;
//         }

//         this._width = w;
//     }
// }

// const rect = new Rectangle(2,5);
// const rectWidth = rect.width;
// console.log(rectWidth);

// rect._width = -10; // error
// rect._height = -10; // error
// rect.width = -10;
// rect.height = -10; // error
// console.log(rect);

// // 2 incapsulation: getters & setters

// class User {
//     private _name: string;
//     private _password: string;
//     private _id: string

//     constructor( name: string, password: string ) {
//         this._name = name;
//         this._password = password;
//         // this._id = generateId();  // random method returns string      
//     }

    
//     public get name() : string {
//         return this._name;
//     }
    

//     public set name(v : string) {
//         this._name = v;
//     }

    
//     public get password() : string {
//         return this._password;
//     }
    

//     public set password(v : string) {
//         this._password = v;
//     }

    
//     public get id() : string {
//         return this._id;
//     }
// }

// const user = new User('Vasya', 'qwe123');

// user.id = 5; // error
// user.name = 'Oleg';

// // 3 incapsulation: random methods

// interface Table {
//     name: string;
// }

// class Database implements Table {
//     private _url: string;
//     private _port: string;
//     private _username: string;
//     private _password: string;
//     private _tables: Array<Table>;

//     constructor(url: string, port: string, username: string, password: string) {
//         this._url = url;
//         this._port = url;
//         this._username = username;
//         this._password = password;
//         this._tables = [];
//     }
//     name: string;


//     public createNewTable(table: Table) {
//         this._tables.push(table)
//     }

//     public clearTables() {
//         this._tables = [];
//     }
    
//     public get url() : string {
//         return this._url;
//     }
    
//     public get port() : string {
//         return this._port;
//     }

//     public get username() : string {
//         return this._username;
//     }

//     public get password() : string {
//         return this._password;
//     }

//     public get tables() : Array<Table> {
//         return this._tables;
//     }    
// }

// const db = new Database('1', '2', '3', '4');

// db.tables = []; // error
// db.createNewTable({name: 'users'});
// db.createNewTable({name: 'roles'});

// console.log(db.tables);


// 2 inheritance

class Person {
    private _firstname;
    private _lastname;
    private _age;
    constructor(firstname, lastname, age) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
    }

    public get fullname() : string {
    // public fullname() : string { // w/o getter - only pure method
        return `Фамиля - ${this._lastname} Имя - ${this._firstname}  `
    }

    public greeting() {
        console.log(`My name is ${this._firstname} and i am a person`);
    }
}

class Dev extends Person {
    private level;
    private language;

    constructor(firstname: string, lastname: string, age: number, level: string, language: string) {
        super(firstname, lastname, age);
        this.level = level;
        this.language = language;
    }

    public greeting() {
        console.log(`My name is ${this._firstname} and i am a dev`);
    }
}

const andre = new Dev('Andre', 'Dantes', 45, 'june', 'js');
console.log(andre);
console.log(andre.fullname);
// console.log(andre.fullname()); // w/o getter - only pure method

// 3 polymorphism

const vasya = new Person('vasya', 'rok', 15);

// one method works identically (5+5=10; '5' + '5' = '55' work with different types can be implemented in one method )
vasya.greeting();
andre.greeting();
