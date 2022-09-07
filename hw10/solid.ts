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
        // Violation of the principle
        this.type === 'sword' && console.log(`Удар мечом, урон: ${this.damage}`);
        this.type === 'crossbow' && console.log(`Удар с арбалета, урон: ${this.damage}`);
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

const crossbow = new Weapon('crossbow', 10, 100);
character.changeWeapon(crossbow);
character.attack();

