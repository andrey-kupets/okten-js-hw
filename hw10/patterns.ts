// ------------------- 1 singlton -------------------

// 1.1
class Database {
    url: number;

    constructor() {
       this.url = Math.random();            
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1.url); // different values
console.log(db2.url); // different values

//  1.2
class DatabaseSinglton {
    url: number;
    private static instance: Database;

    constructor() {
        if (DatabaseSinglton.instance) {
            return DatabaseSinglton.instance;
        }

       this.url = Math.random();  
       DatabaseSinglton.instance = this;          
    }
}

const db3 = new DatabaseSinglton();
const db4 = new DatabaseSinglton();

console.log(db3.url); // single value
console.log(db4.url); // single value


