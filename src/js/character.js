class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Неправильное имя персонажа')
        }

        if (!['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('Несуществующий тип')
        }
        this.name = name,
            this.type = type,
            this.health = 100,
            this.level = 1
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('нельзя повысить левел умершего')
        }
        this.level += 1;
        this.attack = (this.attack * 0.2) + this.attack;
        this.defence = (this.defence * 0.2) + this.defence;
        this.health = 100;

    }

    damage(points) {
        const damage = points * (1 - this.defence / 100);
        this.health = this.health - damage < 0 ? 0 : this.health - damage;
    }
}

class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowerman');
        this.attack = 25;
        this.defence = 25;
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
        this.attack = 25;
        this.defence = 25;
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10;
    }
}

export { Character, Bowerman, Swordsman, Magician, Undead, Zombie, Daemon };