// 2 open-closed principle
class Weapon {
    type: string;
    damage: number;
    range: number;

    constructor(type: string, damage: number, range: number) {
        this.type = type;
        this.damage = damage;
        this.range = range;
    }

    attack() {
        console.log(`Удар мечом, урон: ${this.damage}`);
    }
}

class Character {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }

    attack() {
        this.weapon.attack();
    }
}

const sword = new Weapon('sword', 15, 2);
const character = new Character('warrior', sword);
character.attack();

